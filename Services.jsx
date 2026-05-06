// Services.jsx — Pôle Santé Antibes Centre

function Services({ onNavigate }) {
  const services = [
    {
      id: 'medecine-sport',
      icon: 'zap',
      title: 'Médecin du sport',
      desc: "Dr Jalliffier-Verne, médecin du sport à Antibes : traumatologie sportive, certificats médicaux d'aptitude, suivi des sportifs amateurs et professionnels, prévention des blessures.",
      tag: 'Médecine sportive',
    },
    {
      id: 'kine',
      icon: 'activity',
      title: 'Kinésithérapeutes',
      desc: 'Faites appel à notre équipe de masseurs-kinésithérapeutes pour vos besoins en rééducation, en renforcement musculaire et vos problèmes de mobilité.',
      tag: 'Rééducation',
    },
    {
      id: 'medecins',
      icon: 'stethoscope',
      title: 'Médecin généraliste',
      desc: 'Notre médecin généraliste prend soin de vous au quotidien : maladies courantes, suivi et orientation vers les spécialistes adaptés.',
      tag: 'Consultations',
    },
    {
      id: 'osteo',
      icon: 'user-check',
      title: 'Ostéopathie',
      desc: "Une approche manuelle globale du corps pour traiter les douleurs et rétablir l'équilibre musculo-squelettique.",
      tag: 'Bien-être',
    },
    {
      id: 'equipements',
      icon: 'zap',
      title: 'Équipements & Technologies',
      desc: 'Plateau technique de kinésithérapie, salle de rééducation active et protocole de tractions robotisées SOS DOS pour les douleurs vertébrales.',
      tag: 'Matériel',
    },
  ];

  const iconPaths = {
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
    stethoscope: <><path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6v0a6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 100 .3"/><path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4"/><circle cx="20" cy="10" r="2"/></>,
    'user-check': <><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></>,
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
  };

  return (
    <section className="psa-services-section" style={svcStyles.section}>
      <div style={svcStyles.inner}>
        <div style={svcStyles.header}>
          <div style={svcStyles.eyebrow}>NOS SERVICES</div>
          <h2 style={svcStyles.title}>Des soins pour chaque besoin</h2>
          <p style={svcStyles.subtitle}>Un centre médical et paramédical à votre service, du lundi au samedi.</p>
        </div>
        <div style={svcStyles.grid}>
          {services.map(s => (
            <div key={s.id}
              style={{...svcStyles.card, ...(s.featured ? svcStyles.cardFeatured : {})}}
              onClick={() => onNavigate(s.id)}>
              <div style={{...svcStyles.iconWrap, ...(s.featured ? svcStyles.iconWrapGold : {})}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke={s.featured ? '#ca9e3f' : '#0f4021'}
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {iconPaths[s.icon]}
                </svg>
              </div>
              <div style={svcStyles.tag}>{s.tag}</div>
              <h3 style={svcStyles.cardTitle}>{s.title}</h3>
              <p style={svcStyles.cardDesc}>{s.desc}</p>
              <span style={svcStyles.cardLink}>
                Prendre rendez-vous
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </span>
            </div>
          ))}
        </div>

        <div style={svcStyles.doctolibBanner}>
          <div>
            <div style={svcStyles.bannerTitle}>Prise de rendez-vous uniquement sur Doctolib</div>
            <div style={svcStyles.bannerSub}>Consultation en ligne 24h/24 — rapide, simple, sans attente téléphonique.</div>
          </div>
          <a href="https://www.doctolib.fr/pole-de-sante/antibes/pole-sante-antibes-centre/booking/specialities?profile_skipped=true&source=external_referral"
             target="_blank" rel="noopener" style={svcStyles.bannerCta}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Prendre RDV sur Doctolib
          </a>
        </div>
      </div>
    </section>
  );
}

const svcStyles = {
  section: { background: '#faf8f4', padding: '48px 24px 80px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: 52 },
  eyebrow: { fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#ca9e3f', marginBottom: 12 },
  title: { fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 600, color: '#0f4021', marginBottom: 14 },
  subtitle: { fontFamily: "'Nunito', sans-serif", fontSize: 16, color: '#8a8782', lineHeight: 1.6 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 40 },
  card: { background: '#fff', borderRadius: 14, padding: '28px 24px', boxShadow: '0 2px 16px rgba(15,64,33,0.07)', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column' },
  cardFeatured: { borderTop: '3px solid #ca9e3f' },
  iconWrap: { width: 52, height: 52, background: '#e8f0ea', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  iconWrapGold: { background: '#f2e4bc' },
  tag: { fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ca9e3f', marginBottom: 8 },
  cardTitle: { fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: '#0f4021', marginBottom: 10, lineHeight: 1.2 },
  cardDesc: { fontFamily: "'Nunito', sans-serif", fontSize: 15, color: '#6b7280', lineHeight: 1.65, flex: 1, marginBottom: 20 },
  cardLink: { fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 700, color: '#ca9e3f', display: 'inline-flex', alignItems: 'center', gap: 4 },
  doctolibBanner: { background: '#0f4021', borderRadius: 14, padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' },
  bannerTitle: { fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 6 },
  bannerSub: { fontFamily: "'Nunito', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.75)' },
  bannerCta: { background: '#ca9e3f', color: '#0f4021', padding: '12px 24px', borderRadius: 8, fontSize: 14, fontWeight: 700, fontFamily: "'Nunito', sans-serif", textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' },
};

Object.assign(window, { Services });
