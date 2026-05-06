// Footer.jsx — Pôle Santé Antibes Centre

function Footer({ onNavigate }) {
  return (
    <>
      <div className="psa-footer-separator" style={ftStyles.separator} aria-hidden="true"></div>
      <footer style={ftStyles.footer}>
      <div style={ftStyles.inner}>
        <div className="psa-footer-top" style={ftStyles.top}>
          <div style={ftStyles.brand}>
            <img src="assets/logo.png" alt="Pôle Santé Antibes Centre" style={ftStyles.logo} decoding="async" loading="lazy" />
            <p style={ftStyles.tagline}>
              Vivre est un combat — prendre soin des autres, c'est lui donner du sens.
            </p>
            <a href="https://www.instagram.com/polesante_antibes/" target="_blank" rel="noopener" style={ftStyles.instagram}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              @polesante_antibes
            </a>
          </div>
          <div style={ftStyles.linksCol}>
            <div style={ftStyles.colTitle}>Services</div>
            {['kine','medecins','medecine-sport','osteo','equipements'].map((id, i) => (
              <button key={id} onClick={() => onNavigate(id)} style={ftStyles.link}>
                {['Kinésithérapeutes','Médecins','Médecine du sport','Ostéopathie','Équipements'][i]}
              </button>
            ))}
          </div>
          <div style={ftStyles.linksCol}>
            <div style={ftStyles.colTitle}>Le Pôle</div>
            {['equipe','recrutement','contact'].map((id, i) => (
              <button key={id} onClick={() => onNavigate(id)} style={ftStyles.link}>
                {["Notre équipe","Recrutement","Contact & accès"][i]}
              </button>
            ))}
            <button onClick={() => onNavigate('mentions')} style={ftStyles.link}>Mentions légales</button>
            <button onClick={() => onNavigate('cgu')} style={ftStyles.link}>CGU</button>
            <button onClick={() => onNavigate('donnees')} style={ftStyles.link}>Données personnelles</button>
          </div>
          <div style={ftStyles.linksCol}>
            <div style={ftStyles.colTitle}>Contact</div>
            <div style={ftStyles.contactItem}>27 Bd Gustave Chancel<br />06600 Antibes</div>
            <div style={ftStyles.contactItem}><a href="tel:+33422328810" style={{color:'inherit', textDecoration:'none'}}>04 22 32 88 10</a></div>
            <div style={ftStyles.contactItem}><a href="mailto:secretariat.polesanteantibes@gmail.com" style={{color:'inherit', textDecoration:'none'}}>secretariat.polesanteantibes@gmail.com</a></div>
            <div style={ftStyles.contactItem}>Lun–Ven 8h–20h<br />Sam 8h–18h</div>
            <a href="https://www.doctolib.fr/pole-de-sante/antibes/pole-sante-antibes-centre/booking/specialities?profile_skipped=true&source=external_referral"
               target="_blank" rel="noopener" style={ftStyles.rdvBtn}>
              Prendre RDV sur Doctolib
            </a>
          </div>
        </div>
        <div style={ftStyles.bottom}>
          <span style={{display:'inline-flex', alignItems:'center', gap:10}}>
            <span>© 2026 Pôle Santé Antibes Centre. Tous droits réservés.</span>
            <button
              onClick={() => { if (typeof window !== 'undefined' && window.psaOpenAdmin) window.psaOpenAdmin(); }}
              title="Administration"
              aria-label="Ouvrir le panneau d'administration"
              style={ftStyles.adminBtn}>🔒</button>
          </span>
          <span>Créé par Loïc KARRER - <a href="https://annuaire-entreprises.data.gouv.fr/entreprise/mycentersolution-mcs-929062339" target="_blank" rel="noopener" style={{ color: '#134524', textDecoration: 'none', fontWeight: 600 }}>MyCenterSolution</a></span>
        </div>
      </div>
    </footer>
    </>
  );
}

const ftStyles = {
  separator: { background: '#fff', height: 40, width: '100%' },
  footer: { background: '#faf8f4', color: '#4b4844', padding: '64px 24px 32px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  top: { display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr', gap: 40, marginBottom: 48 },
  brand: { display: 'flex', flexDirection: 'column', gap: 10 },
  logo: { height: 130, width: 'auto', display: 'block', alignSelf: 'flex-start', marginBottom: 4 },
  tagline: { fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontStyle: 'italic', color: '#6b7280', lineHeight: 1.6, maxWidth: 260 },
  instagram: { display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 600, color: '#134524', textDecoration: 'none' },
  linksCol: { display: 'flex', flexDirection: 'column', gap: 8 },
  colTitle: { fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#134524', marginBottom: 6 },
  link: { background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Nunito', sans-serif", fontSize: 13, color: '#4b4844', textAlign: 'left', padding: 0, transition: 'color 0.15s' },
  contactItem: { fontFamily: "'Nunito', sans-serif", fontSize: 12, color: '#6b7280', lineHeight: 1.6 },
  rdvBtn: { background: '#134524', color: '#fff', padding: '9px 16px', borderRadius: 8, fontSize: 12, fontWeight: 700, fontFamily: "'Nunito', sans-serif", textDecoration: 'none', display: 'inline-block', marginTop: 4 },
  bottom: { borderTop: '1px solid rgba(15,64,33,0.15)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontFamily: "'Nunito', sans-serif", fontSize: 12, color: '#8a8782' },
  adminBtn: { background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 14, padding: 4, opacity: 0.45, transition: 'opacity 0.15s', lineHeight: 1 },
};

Object.assign(window, { Footer });
