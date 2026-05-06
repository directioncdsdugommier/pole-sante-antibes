// Header.jsx — Pôle Santé Antibes Centre
const { useState } = React;

function Header({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'kine', label: 'Kinésithérapeutes' },
    { id: 'medecins', label: 'Médecins' },
    { id: 'osteo', label: 'Ostéopathes' },
    { id: 'equipements', label: 'Équipements' },
    { id: 'recrutement', label: 'Recrutement' },
  ];

  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.inner}>
        <button onClick={() => onNavigate('accueil')} style={headerStyles.logoBtn}>
          <img src="assets/logo.png" alt="Pôle Santé Antibes Centre" style={headerStyles.logoImg} decoding="async" fetchpriority="high" />
          <div className="psa-logo-text">
            <div style={headerStyles.logoName}>Pôle Santé</div>
            <div style={headerStyles.logoSub}>Antibes Centre</div>
          </div>
        </button>

        <nav className="psa-header-nav" style={headerStyles.nav}>
          {links.map(l => (
            <button key={l.id} onClick={() => onNavigate(l.id)}
              style={{...headerStyles.link, ...(currentPage === l.id ? headerStyles.linkActive : {})}}>
              {l.label}
              {currentPage === l.id && <span style={headerStyles.activeBar}></span>}
            </button>
          ))}
        </nav>

        <a href="https://www.doctolib.fr/pole-de-sante/antibes/pole-sante-antibes-centre/booking/specialities?profile_skipped=true&source=external_referral"
           target="_blank" rel="noopener" className="psa-header-cta" style={headerStyles.cta}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Prendre RDV
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)} className="psa-header-burger" style={headerStyles.burger}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f4021" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      {menuOpen && (
        <div style={headerStyles.mobileMenu}>
          {links.map(l => (
            <button key={l.id} onClick={() => { onNavigate(l.id); setMenuOpen(false); }}
              style={{...headerStyles.mobileLink, ...(currentPage === l.id ? {color:'#0f4021', fontWeight:700} : {})}}>
              {l.label}
            </button>
          ))}
          <a href="https://www.doctolib.fr/pole-de-sante/antibes/pole-sante-antibes-centre/booking/specialities?profile_skipped=true&source=external_referral"
             target="_blank" rel="noopener" style={{...headerStyles.cta, width:'100%', justifyContent:'center', marginTop:8}}>
            Prendre RDV
          </a>
        </div>
      )}
    </header>
  );
}

const headerStyles = {
  header: { background: '#fff', borderBottom: '1px solid #e7e5e2', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 8px rgba(15,64,33,0.06)' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 110 },
  logoBtn: { background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, padding: 0 },
  logoImg: { height: 140 },
  logoName: { fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 600, color: '#0f4021', lineHeight: 1.1 },
  logoSub: { fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8a8782' },
  nav: { display: 'flex', gap: 4, '@media(maxWidth:900px)': {display:'none'} },
  link: { background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 600, color: '#4b4844', padding: '4px 10px', position: 'relative', borderRadius: 6, transition: 'color 0.15s' },
  linkActive: { color: '#0f4021' },
  activeBar: { position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 2, background: '#ca9e3f', borderRadius: 2 },
  cta: { background: '#ca9e3f', color: '#0f4021', padding: '9px 18px', borderRadius: 8, fontSize: 13, fontWeight: 700, fontFamily: "'Nunito', sans-serif", border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' },
  burger: { display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 },
  mobileMenu: { padding: '12px 24px 20px', borderTop: '1px solid #e7e5e2', display: 'flex', flexDirection: 'column', gap: 4 },
  mobileLink: { background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 600, color: '#4b4844', textAlign: 'left', padding: '10px 0', borderBottom: '1px solid #f0eeea' },
};

Object.assign(window, { Header });
