// Contact.jsx — Pôle Santé Antibes Centre

function Contact() {
  return (
    <section style={ctStyles.section}>
      <div style={ctStyles.inner}>
        <div style={ctStyles.header}>
          <div style={ctStyles.eyebrow}>NOUS TROUVER</div>
          <h2 style={ctStyles.title}>Accès & Contact</h2>
        </div>
        <div className="psa-contact-grid" style={ctStyles.grid}>
          <div style={ctStyles.infoCol}>
            <div style={ctStyles.infoBlock}>
              <div style={ctStyles.infoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f4021" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div style={ctStyles.infoLabel}>Adresse</div>
                <div style={ctStyles.infoValue}>27 Boulevard Gustave Chancel<br />06600 Antibes</div>
                <div style={ctStyles.infoNote}>À côté de la médiathèque · 1h gratuite parking EFFIA</div>
              </div>
            </div>
            <div style={ctStyles.infoBlock}>
              <div style={ctStyles.infoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f4021" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div style={ctStyles.infoLabel}>Téléphone</div>
                <div style={ctStyles.infoValue}><a href="tel:+33422328810" style={{color:'inherit', textDecoration:'none'}}>04 22 32 88 10</a></div>
              </div>
            </div>
            <div style={ctStyles.infoBlock}>
              <div style={ctStyles.infoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f4021" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div style={ctStyles.infoLabel}>Email</div>
                <div style={ctStyles.infoValue}><a href="mailto:secretariat.polesanteantibes@gmail.com" style={{color:'inherit', textDecoration:'none'}}>secretariat.polesanteantibes@gmail.com</a></div>
              </div>
            </div>
            <div style={ctStyles.infoBlock}>
              <div style={ctStyles.infoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f4021" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div style={ctStyles.infoLabel}>Horaires</div>
                <div style={ctStyles.hoursRow}><span style={ctStyles.day}>Lundi – Vendredi</span><span style={ctStyles.hours}>8h00 – 20h00</span></div>
                <div style={ctStyles.hoursRow}><span style={ctStyles.day}>Samedi</span><span style={ctStyles.hours}>8h00 – 18h00</span></div>
                <div style={ctStyles.hoursRow}><span style={ctStyles.day}>Dimanche</span><span style={{...ctStyles.hours, color:'#c0392b'}}>Fermé</span></div>
              </div>
            </div>
            <div style={ctStyles.infoBlock}>
              <div style={ctStyles.infoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f4021" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><circle cx="8.5" cy="15.5" r="1.5"/><circle cx="15.5" cy="15.5" r="1.5"/><path d="M8 3v2M16 3v2"/><path d="M6 19l-2 3M18 19l2 3"/></svg>
              </div>
              <div>
                <div style={ctStyles.infoLabel}>Transport</div>
                <div style={ctStyles.infoValue}>Bus A · 08 · 16 · 620<br />Arrêt Dugommier</div>
                <div style={ctStyles.infoNote}>À 10 min à pied de la gare SNCF</div>
              </div>
            </div>
          </div>

          <div style={ctStyles.mapCol}>
            <div style={ctStyles.mapEmbed}>
              <iframe
                title="Pôle Santé Antibes Centre"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.123!2d7.1264!3d43.5804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdbb10edb53f2d%3A0x55cc75e6bde3ac6d!2s27%20Bd%20Gustave%20Chancel%2C%2006600%20Antibes!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%" height="100%" style={{border:0, borderRadius: 12}} allowFullScreen loading="lazy">
              </iframe>
            </div>
            <a href="https://maps.google.com/?q=27+Boulevard+Gustave+Chancel+06600+Antibes"
               target="_blank" rel="noopener" style={ctStyles.directionsBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
              Obtenir l'itinéraire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const ctStyles = {
  section: { background: '#fff', padding: '40px 24px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  header: { marginBottom: 48 },
  eyebrow: { fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#ca9e3f', marginBottom: 12 },
  title: { fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 600, color: '#0f4021' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' },
  infoCol: { display: 'flex', flexDirection: 'column', gap: 28 },
  infoBlock: { display: 'flex', gap: 16, alignItems: 'flex-start' },
  infoIcon: { width: 44, height: 44, background: '#e8f0ea', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  infoLabel: { fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ca9e3f', marginBottom: 4 },
  infoValue: { fontFamily: "'Nunito', sans-serif", fontSize: 14, color: '#1a1816', lineHeight: 1.6 },
  infoNote: { fontFamily: "'Nunito', sans-serif", fontSize: 12, color: '#8a8782', marginTop: 3 },
  hoursRow: { display: 'flex', gap: 12, marginBottom: 3 },
  day: { fontFamily: "'Nunito', sans-serif", fontSize: 13, color: '#4b4844', minWidth: 130 },
  hours: { fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 700, color: '#0f4021' },
  mapCol: { display: 'flex', flexDirection: 'column', gap: 14 },
  mapEmbed: { borderRadius: 14, overflow: 'hidden', height: 380, boxShadow: '0 4px 24px rgba(15,64,33,0.1)' },
  directionsBtn: { background: '#0f4021', color: '#fff', padding: '12px 22px', borderRadius: 8, fontSize: 13, fontWeight: 700, fontFamily: "'Nunito', sans-serif", textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start' },
};

Object.assign(window, { Contact });
