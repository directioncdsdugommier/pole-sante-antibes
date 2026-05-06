// Hero.jsx — Pôle Santé Antibes Centre

function Hero({ onNavigate }) {
  const { state } = window.usePsaStore();
  const heroImg = state.heroImage || '';

  return (
    <section className="psa-hero-section" style={heroStyles.section}>
      <div className="psa-hero-inner" style={heroStyles.inner}>
        <div style={heroStyles.content}>
          <div className="psa-hero-eyebrow" style={heroStyles.eyebrow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ca9e3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            Centre Médical et Paramédical · Antibes
          </div>
          <h1 className="psa-hero-h1" style={heroStyles.h1}>
            Votre santé,<br />
            <em style={heroStyles.h1em}>notre priorité</em>
          </h1>
          <p className="psa-hero-desc" style={heroStyles.desc}>
            Médecins généralistes, chirurgiens du genou, ostéopathes, kinésithérapeutes et infirmières réunis en plein cœur d'Antibes. Prenez soin de vous, au quotidien.
          </p>
          <div className="psa-cta-row" style={heroStyles.ctaRow}>
            <a href="https://www.doctolib.fr/pole-de-sante/antibes/pole-sante-antibes-centre/booking/specialities?profile_skipped=true&source=external_referral"
               target="_blank" rel="noopener" style={heroStyles.ctaPrimary}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Prendre rendez-vous
            </a>
            <button onClick={() => onNavigate('equipe')} style={heroStyles.ctaGhost}>
              Découvrir l'équipe
            </button>
          </div>
          <div className="psa-hero-info" style={heroStyles.infoRow}>
            <span style={heroStyles.infoItem}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Lun–Ven 8h–20h · Sam 8h–18h
            </span>
            <span style={heroStyles.infoDot}>·</span>
            <span style={heroStyles.infoItem}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              04 22 32 88 10
            </span>
            <span style={heroStyles.infoDot}>·</span>
            <span style={heroStyles.infoItem}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              27 Bd Gustave Chancel, Antibes
            </span>
          </div>
        </div>
        <div className="psa-hero-cards" style={heroStyles.cardCol}>
          {heroImg ? (
            <img src={heroImg} alt="Pôle Santé Antibes Centre" style={heroStyles.heroImg} decoding="async" fetchpriority="high" />
          ) : (
            <div style={heroStyles.heroImgPlaceholder}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <div style={{fontFamily:"'Nunito',sans-serif", fontSize:11, color:'rgba(255,255,255,0.55)', letterSpacing:'0.18em', textTransform:'uppercase', marginTop:10, textAlign:'center'}}>Image à ajouter<br/>depuis l'administration</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ServiceMiniCard({ icon, label, sub, color, iconColor }) {
  const icons = {
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
    stethoscope: <><path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6v0a6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 100 .3"/><path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4"/><circle cx="20" cy="10" r="2"/></>,
    zap: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>,
    'user-check': <><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></>,
  };
  return (
    <div style={{background: '#fff', borderRadius: 12, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: '0 2px 16px rgba(15,64,33,0.08)'}}>
      <div style={{width: 40, height: 40, background: color, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icons[icon]}</svg>
      </div>
      <div>
        <div style={{fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600, color: '#0f4021', lineHeight: 1.2}}>{label}</div>
        <div style={{fontFamily: "'Nunito', sans-serif", fontSize: 11, color: '#8a8782', marginTop: 2}}>{sub}</div>
      </div>
    </div>
  );
}

const heroStyles = {
  section: { background: '#1d5f37', position: 'relative', minHeight: 560, display: 'flex', alignItems: 'center' },
  inner: { position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '80px 24px', display: 'flex', gap: 60, alignItems: 'center', width: '100%' },
  content: { flex: 1, minWidth: 0 },
  eyebrow: { fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ca9e3f', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 7 },
  h1: { fontFamily: "'Cormorant Garamond', serif", fontSize: 58, fontWeight: 600, color: '#fff', lineHeight: 1.1, marginBottom: 22 },
  h1em: { fontStyle: 'italic', color: '#ca9e3f', fontWeight: 400 },
  desc: { fontFamily: "'Nunito', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.88)', lineHeight: 1.7, marginBottom: 36, maxWidth: 480 },
  ctaRow: { display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 },
  ctaPrimary: { background: '#ca9e3f', color: '#0f4021', padding: '13px 26px', borderRadius: 8, fontSize: 14, fontWeight: 700, fontFamily: "'Nunito', sans-serif", textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 },
  ctaGhost: { background: 'transparent', color: '#fff', padding: '13px 26px', borderRadius: 8, fontSize: 14, fontWeight: 700, fontFamily: "'Nunito', sans-serif", border: '1.5px solid rgba(255,255,255,0.5)', cursor: 'pointer' },
  infoRow: { display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' },
  infoItem: { fontFamily: "'Nunito', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.7)', display: 'inline-flex', alignItems: 'center', gap: 5 },
  infoDot: { color: 'rgba(255,255,255,0.35)', fontSize: 14 },
  cardCol: { display: 'flex', flexDirection: 'column', gap: 12, minWidth: 320, maxWidth: 420, flexShrink: 0, width: '100%' },
  heroImg: { width: '100%', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.25)', display: 'block', aspectRatio: '4/5', objectFit: 'cover' },
  heroImgPlaceholder: { width: '100%', aspectRatio: '4/5', borderRadius: 16, background: 'rgba(255,255,255,0.06)', border: '1.5px dashed rgba(255,255,255,0.25)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 },
};

Object.assign(window, { Hero });
