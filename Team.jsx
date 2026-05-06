// Team.jsx — Pôle Santé Antibes Centre
const { useState: useStateTeam, useEffect: useEffectTeam } = React;

function Team() {
  const { state } = window.usePsaStore();
  const photos = state.photos || {};
  const members = state.members || DEFAULT_MEMBERS;

  const isDoctor = (m) => /médecin|chirurgien|docteur|^dr\.?\s/i.test(m.name) || /médecin|chirurgien|generaliste|généraliste/i.test(m.role || '');
  const isKine = (m) => /kin[ée]sith[ée]rapeute/i.test(m.role || '');
  const isNurse = (m) => /infirmier|infirmière/i.test(m.role || '') || /infirmier|infirmière/i.test(m.name);
  const doctors = members.filter(isDoctor);
  let kines = members.filter(isKine);
  const abIdx = kines.findIndex(m => m.initials === 'AB' || /basset/i.test(m.name));
  if (abIdx > 0) { const ab = kines.splice(abIdx, 1)[0]; kines = [ab, ...kines]; }
  const others = members.filter(m => isNurse(m));

  const RDV_KINE = "https://www.doctolib.fr/pole-de-sante/antibes/pole-sante-antibes-centre/booking/motive-categories?specialityId=9&telehealth=false&placeId=establishment-17569&profile_skipped=true&source=external_referral";
  const RDV_BY_INITIALS = {
    AT: 'https://www.doctolib.fr/pole-de-sante/antibes/pole-sante-antibes-centre/booking/motives?specialityId=2&telehealth=false&placeId=establishment-17569&profile_skipped=true&source=external_referral',
    TA: 'https://www.doctolib.fr/pole-de-sante/antibes/pole-sante-antibes-centre/booking/motive-categories?specialityId=19&telehealth=false&placeId=establishment-17569&profile_skipped=true&source=external_referral',
    JV: 'https://www.doctolib.fr/pole-de-sante/antibes/pole-sante-antibes-centre/booking/motives?specialityId=284&telehealth=false&placeId=establishment-17569&profile_skipped=true&source=external_referral',
  };

  const Card = ({ m, size, rdv }) => (
    <div style={teamStyles.card}>
      <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1' }}>
        {photos[m.initials]
          ? <img src={photos[m.initials]} alt={m.name} decoding="async" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : <div style={{ ...teamStyles.avatar, background: m.bg, color: m.fg, width: '100%', height: '100%', fontSize: size === 'sm' ? 44 : 84 }}>{m.initials}</div>}
      </div>
      <div style={size === 'sm' ? teamStyles.cardBodySm : teamStyles.cardBody}>
        <div style={size === 'sm' ? teamStyles.nameSm : teamStyles.name}>{m.name}</div>
        <div style={teamStyles.role}>{m.role}</div>
        {size !== 'sm' && <p style={teamStyles.desc}>{m.desc}</p>}
        {rdv && <a href={rdv} target="_blank" rel="noopener" style={{ marginTop: 12, background: '#ca9e3f', color: '#0f4021', padding: '8px 14px', borderRadius: 7, fontSize: 12, fontWeight: 700, fontFamily: "'Nunito', sans-serif", textDecoration: 'none', display: 'inline-block', alignSelf: 'flex-start' }}>Prendre RDV</a>}
      </div>
    </div>
  );

  const [kIdx, setKIdx] = useStateTeam(0);
  const [perView, setPerView] = useStateTeam(4);
  useEffectTeam(() => {
    const updatePerView = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 960) setPerView(2);
      else setPerView(4);
    };
    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, []);
  const maxIdx = Math.max(0, kines.length - perView);
  const safeIdx = Math.min(kIdx, maxIdx);
  const prev = () => setKIdx(i => Math.max(0, i - 1));
  const next = () => setKIdx(i => Math.min(maxIdx, i + 1));

  // Détecteur de swipe minimaliste — pas de drag visuel, juste prev/next sur swipe.
  // On stocke startX/startY/locked dans une ref pour persister entre touchstart et touchend.
  const touchRef = React.useRef({ startX: 0, startY: 0, t: 0 });

  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    const t = e.touches[0];
    touchRef.current.startX = t.clientX;
    touchRef.current.startY = t.clientY;
    touchRef.current.t = Date.now();
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.startX;
    const dy = t.clientY - touchRef.current.startY;
    const dt = Date.now() - touchRef.current.t;
    // Swipe horizontal valide: déplacement horizontal > vertical, > 30px, en moins de 700ms
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30 && dt < 700) {
      if (dx < 0) setKIdx(i => Math.min(maxIdx, i + 1));
      else setKIdx(i => Math.max(0, i - 1));
    }
  };

  return (
    <section style={teamStyles.section}>
      <div style={teamStyles.inner}>
        <div style={teamStyles.header}>
          <div style={teamStyles.eyebrow}>NOTRE ÉQUIPE</div>
          <h2 style={teamStyles.title}>Des professionnels à votre écoute</h2>
          <p style={teamStyles.subtitle}>Une équipe soudée et passionnée, engagée pour votre mieux-être.</p>
        </div>

        {doctors.length > 0 && (
          <>
            <div style={teamStyles.rowLabel}>Médecins</div>
            <div className="psa-team-large" style={teamStyles.gridLarge}>
              {doctors.map((m, i) => <Card key={i} m={m} size="lg" rdv={RDV_BY_INITIALS[m.initials]} />)}
            </div>
          </>
        )}

        {kines.length > 0 && (
          <>
            <div style={{...teamStyles.rowLabel, marginTop: 56}}>Kinésithérapeutes</div>
            <div style={teamStyles.carousel}>
              <button onClick={prev} disabled={safeIdx === 0} style={{...teamStyles.navBtn, opacity: safeIdx === 0 ? 0.3 : 1, cursor: safeIdx === 0 ? 'default' : 'pointer'}} aria-label="Précédent">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <div style={teamStyles.carouselViewport} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <div style={{...teamStyles.carouselTrack, transform: `translateX(calc(${-safeIdx} * ((100% - ${(perView - 1) * 16}px) / ${perView} + 16px)))`, gridTemplateColumns: `repeat(${kines.length}, calc((100% - ${(perView - 1) * 16}px) / ${perView}))`}}>
                  {kines.map((m, i) => <Card key={i} m={m} size="sm" rdv={RDV_KINE} />)}
                </div>
              </div>
              <button onClick={next} disabled={safeIdx >= maxIdx} style={{...teamStyles.navBtn, opacity: safeIdx >= maxIdx ? 0.3 : 1, cursor: safeIdx >= maxIdx ? 'default' : 'pointer'}} aria-label="Suivant">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
            {maxIdx > 0 && (
              <div style={teamStyles.dots}>
                {Array.from({length: maxIdx + 1}).map((_, i) => (
                  <button key={i} onClick={() => setKIdx(i)} style={{...teamStyles.dot, ...(i === safeIdx ? teamStyles.dotActive : {})}} aria-label={`Aller à ${i+1}`} />
                ))}
              </div>
            )}
            <div style={teamStyles.ctaWrap}>
              <a href={RDV_KINE} target="_blank" rel="noopener" style={teamStyles.ctaBtn}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Prendre RDV avec un kinésithérapeute
              </a>
            </div>
          </>
        )}

        {others.length > 0 && (
          <>
            <div style={{...teamStyles.rowLabel, marginTop: 56}}>Infirmières</div>
            <div className="psa-nurses-row" style={teamStyles.nursesRow}>
              {others.map((m, i) => (
                <div key={i} className="psa-nurse-card" style={teamStyles.nurseCard}>
                  <Card m={m} size="sm" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

const DEFAULT_MEMBERS = [
  { initials: 'AT', name: 'Dr. Aurora Toma', role: 'Médecin Généraliste', bg: '#e8f0ea', fg: '#0f4021', desc: 'Médecin de famille, elle assure le suivi global de vos problèmes de santé et vous oriente vers les spécialistes adaptés.' },
  { initials: 'TA', name: 'Dr. Tsiry Andriamananaivo', role: 'Chirurgien Orthopédique', bg: '#f2e4bc', fg: '#a37d2f', desc: 'Spécialiste en chirurgie orthopédique, il prend en charge les pathologies osseuses, articulaires et musculaires.' },
  { initials: 'JV', name: 'Dr. Jalliffier-Verne', role: 'Médecin du sport', bg: '#e8f0ea', fg: '#0f4021', desc: 'Expert en médecine du sport, il accompagne sportifs et patients actifs dans la prévention et le traitement des blessures.' },
  { initials: 'JF', name: 'Julie Faleiro', role: 'Infirmière', bg: '#f2e4bc', fg: '#a37d2f', desc: 'Soins infirmiers au cabinet et à domicile, avec écoute et bienveillance au quotidien.' },
  { initials: 'CP', name: 'Christine Da Ponte', role: 'Infirmière', bg: '#e8f0ea', fg: '#0f4021', desc: 'Prise en charge infirmière personnalisée, pansements, injections et suivi des patients.' },
  { initials: 'AB', name: 'Antoine Basset', role: 'Kinésithérapeute', bg: '#f2e4bc', fg: '#a37d2f', desc: 'Kinésithérapeute passionné, dédié à la rééducation et au bien-être de ses patients.' },
  { initials: 'EP', name: 'Elouan Poisson', role: 'Kinésithérapeute', bg: '#e8f0ea', fg: '#0f4021', desc: 'Rééducation fonctionnelle et thérapie manuelle pour accompagner votre guérison au quotidien.' },
  { initials: 'AC', name: 'Anaïs Creignou', role: 'Kinésithérapeute', bg: '#f2e4bc', fg: '#a37d2f', desc: 'Approche douce et personnalisée, spécialisée en renforcement musculaire et mobilité.' },
  { initials: 'AR', name: 'Alexandre Redon', role: 'Kinésithérapeute', bg: '#e8f0ea', fg: '#0f4021', desc: 'Spécialisé en rééducation sportive et post-opératoire.' },
  { initials: 'KD', name: 'Klaudia Duda', role: 'Kinésithérapeute', bg: '#f2e4bc', fg: '#a37d2f', desc: 'Thérapie manuelle et rééducation, avec une attention particulière portée à chaque patient.' },
  { initials: 'JC', name: 'Jacques Campana', role: 'Kinésithérapeute & Ostéopathe', bg: '#e8f0ea', fg: '#0f4021', desc: 'Double compétence en kinésithérapie et ostéopathie pour une prise en charge complète.' },
];

const teamStyles = {
  section: { background: '#fff', padding: '40px 24px' },
  inner: { maxWidth: 1080, margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: 52 },
  eyebrow: { fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#ca9e3f', marginBottom: 12 },
  title: { fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 600, color: '#0f4021', marginBottom: 14 },
  subtitle: { fontFamily: "'Nunito', sans-serif", fontSize: 16, color: '#8a8782', lineHeight: 1.6 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 },
  gridLarge: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 },
  gridSmall: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 18 },
  nursesRow: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 18 },
  nurseCard: { width: 200, flexShrink: 0 },
  rowLabel: { fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#ca9e3f', marginBottom: 20, textAlign: 'center' },
  card: { background: '#faf8f4', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  avatar: { width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 },
  cardBody: { padding: '18px 20px 22px', display: 'flex', flexDirection: 'column' },
  cardBodySm: { padding: '10px 12px 14px', display: 'flex', flexDirection: 'column' },
  name: { fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: '#0f4021', lineHeight: 1.2, marginBottom: 5 },
  nameSm: { fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 600, color: '#0f4021', lineHeight: 1.2, marginBottom: 4 },
  role: { fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ca9e3f', marginBottom: 10 },
  desc: { fontFamily: "'Nunito', sans-serif", fontSize: 15, color: '#6b7280', lineHeight: 1.65 },
  ctaWrap: { display: 'flex', justifyContent: 'center', marginTop: 28 },
  ctaBtn: { display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0f4021', color: '#fff', padding: '12px 22px', borderRadius: 10, fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.02em', boxShadow: '0 4px 14px rgba(15,64,33,0.18)' },
  carousel: { position: 'relative', display: 'flex', alignItems: 'center', gap: 10 },
  carouselViewport: { flex: 1, overflow: 'hidden', touchAction: 'pan-y', userSelect: 'none', WebkitUserSelect: 'none' },
  carouselTrack: { display: 'grid', gridAutoFlow: 'column', gap: 16, transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' },
  navBtn: { width: 36, height: 36, borderRadius: '50%', background: '#fff', border: '1px solid #e7e5e2', color: '#0f4021', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(15,64,33,0.08)', transition: 'all 0.2s' },
  dots: { display: 'flex', justifyContent: 'center', gap: 6, marginTop: 18 },
  dot: { width: 7, height: 7, borderRadius: '50%', background: '#d4d2cd', border: 'none', cursor: 'pointer', padding: 0, transition: 'background 0.2s' },
  dotActive: { background: '#ca9e3f', width: 18, borderRadius: 4 },
};

Object.assign(window, { Team });