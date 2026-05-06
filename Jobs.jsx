// Jobs.jsx — Pôle Santé Antibes Centre
const { useState: useStateJobs } = React;

function Jobs() {
  const [formOpen, setFormOpen] = useStateJobs(false);
  const [submitted, setSubmitted] = useStateJobs(false);
  const [form, setForm] = useStateJobs({ prenom: '', nom: '', email: '', tel: '', specialite: 'Kinésithérapeute', message: '', cvName: '' });

  const defaultOpenings = [
    { id: 1, title: 'Kinésithérapeute libéral(e)', type: 'Libéral', desc: 'Rejoignez notre centre médical et paramédical en plein cœur d\'Antibes. Cabinet moderne, patientèle établie.' },
    { id: 2, title: 'Ostéopathe', type: 'Libéral', desc: 'Opportunité unique dans un environnement de soins dynamique et bienveillant.' },
  ];

  const { state } = window.usePsaStore();
  const openings = state.jobs && state.jobs.length > 0 ? state.jobs : defaultOpenings;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormOpen(false); setForm({ prenom: '', nom: '', email: '', tel: '', specialite: 'Kinésithérapeute', message: '', cvName: '' }); }, 2500);
  };

  return (
    <section style={jobStyles.section}>
      <div style={jobStyles.inner}>
        <div style={jobStyles.header}>
          <div style={jobStyles.eyebrow}>RECRUTEMENT</div>
          <h2 style={jobStyles.title}>Rejoignez notre équipe</h2>
          <p style={jobStyles.subtitle}>Nous recherchons des professionnels de santé passionnés et engagés.</p>
        </div>

        {openings.length > 0 && (
          <div style={jobStyles.openingsGrid}>
            {openings.map((o, i) => (
              <div key={i} style={jobStyles.offerCard}>
                <div style={jobStyles.offerHeader}>
                  <div>
                    <div style={jobStyles.offerTitle}>{o.title}</div>
                    <span style={jobStyles.offerBadge}>{o.type}</span>
                  </div>
                  <button onClick={() => setFormOpen(true)} style={jobStyles.applyBtn}>Postuler</button>
                </div>
                <p style={jobStyles.offerDesc}>{o.desc}</p>
              </div>
            ))}
          </div>
        )}

        <div style={jobStyles.spontane}>
          <div style={jobStyles.spontaneIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ca9e3f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
          <div>
            <div style={jobStyles.spontaneTitle}>Candidature spontanée</div>
            <p style={jobStyles.spontaneDesc}>Aucune offre ne correspond ? Envoyez votre candidature spontanée et nous vous recontacterons dès qu'une opportunité se présente.</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6awlMVN1Dt1TOaAQyzau2jl9Vgor8VmDdj8LDFViZcgCXAQ/viewform?usp=dialog"
             target="_blank"
             rel="noopener"
             style={{ ...jobStyles.spontaneBtn, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Déposer ma candidature</a>
        </div>

        {formOpen && (
          <div style={jobStyles.modal} onClick={(e) => e.target === e.currentTarget && setFormOpen(false)}>
            <div style={jobStyles.modalBox}>
              <div style={jobStyles.modalHeader}>
                <h3 style={jobStyles.modalTitle}>Déposer une candidature</h3>
                <button onClick={() => setFormOpen(false)} style={jobStyles.closeBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b4844" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
              {submitted ? (
                <div style={jobStyles.successMsg}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0f4021" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <div>Candidature envoyée avec succès. Nous vous recontacterons prochainement.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={jobStyles.form}>
                  <div className="psa-jobs-form" style={{...jobStyles.formRow, display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                    <Field label="Prénom" value={form.prenom} onChange={v => setForm({...form, prenom: v})} placeholder="Marie" required />
                    <Field label="Nom" value={form.nom} onChange={v => setForm({...form, nom: v})} placeholder="Dupont" required />
                  </div>
                  <Field label="Email" type="email" value={form.email} onChange={v => setForm({...form, email: v})} placeholder="marie@exemple.fr" required />
                  <Field label="Téléphone" type="tel" value={form.tel} onChange={v => setForm({...form, tel: v})} placeholder="06 12 34 56 78" />
                  <div style={jobStyles.fieldWrap}>
                    <label style={jobStyles.label}>Spécialité</label>
                    <select style={jobStyles.input} value={form.specialite} onChange={e => setForm({...form, specialite: e.target.value})}>
                      <option>Kinésithérapeute</option>
                      <option>Ostéopathe</option>
                      <option>Médecin généraliste</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div style={jobStyles.fieldWrap}>
                    <label style={jobStyles.label}>Message (optionnel)</label>
                    <textarea style={{...jobStyles.input, height: 90, resize: 'none'}}
                      value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      placeholder="Parlez-nous de vous, de votre expérience..." />
                  </div>
                  <div style={jobStyles.fieldWrap}>
                    <label style={jobStyles.label}>CV (PDF, DOC, DOCX)<span style={{color:'#c0392b'}}> *</span></label>
                    <label style={{...jobStyles.input, display:'flex', alignItems:'center', gap:10, cursor:'pointer', background:'#faf8f4'}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f4021" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                      <span style={{color: form.cvName ? '#0f4021' : '#8a8782', fontWeight: form.cvName ? 700 : 400, flex:1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>
                        {form.cvName || 'Choisir un fichier...'}
                      </span>
                      <input type="file" accept=".pdf,.doc,.docx" required
                        onChange={e => setForm({...form, cvName: e.target.files[0]?.name || ''})}
                        style={{display:'none'}} />
                    </label>
                  </div>
                  <button type="submit" style={jobStyles.submitBtn}>Envoyer ma candidature</button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text', required }) {
  return (
    <div style={jobStyles.fieldWrap}>
      <label style={jobStyles.label}>{label}{required && <span style={{color:'#c0392b'}}> *</span>}</label>
      <input type={type} style={jobStyles.input} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} required={required} />
    </div>
  );
}

const jobStyles = {
  section: { background: '#faf8f4', padding: '80px 24px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: 48 },
  eyebrow: { fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#ca9e3f', marginBottom: 12 },
  title: { fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 600, color: '#0f4021', marginBottom: 14 },
  subtitle: { fontFamily: "'Nunito', sans-serif", fontSize: 16, color: '#8a8782', lineHeight: 1.6 },
  openingsGrid: { display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 },
  offerCard: { background: '#fff', borderRadius: 14, padding: '24px 28px', boxShadow: '0 2px 12px rgba(15,64,33,0.07)' },
  offerHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, gap: 16, flexWrap: 'wrap' },
  offerTitle: { fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: '#0f4021', marginBottom: 6 },
  offerBadge: { background: '#e8f0ea', color: '#0f4021', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 4 },
  applyBtn: { background: '#ca9e3f', color: '#0f4021', padding: '10px 20px', borderRadius: 8, fontSize: 13, fontWeight: 700, fontFamily: "'Nunito', sans-serif", border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' },
  offerDesc: { fontFamily: "'Nunito', sans-serif", fontSize: 13, color: '#6b7280', lineHeight: 1.65 },
  spontane: { background: '#0f4021', borderRadius: 14, padding: '28px 32px', display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' },
  spontaneIcon: { width: 52, height: 52, background: 'rgba(202,158,63,0.15)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  spontaneTitle: { fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 6 },
  spontaneDesc: { fontFamily: "'Nunito', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: 500 },
  spontaneBtn: { background: '#ca9e3f', color: '#0f4021', padding: '12px 22px', borderRadius: 8, fontSize: 13, fontWeight: 700, fontFamily: "'Nunito', sans-serif", border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', marginLeft: 'auto' },
  modal: { position: 'fixed', inset: 0, background: 'rgba(15,64,33,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 24 },
  modalBox: { background: '#fff', borderRadius: 16, width: '100%', maxWidth: 520, padding: '32px', boxShadow: '0 8px 48px rgba(15,64,33,0.2)', maxHeight: '90vh', overflowY: 'auto' },
  modalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  modalTitle: { fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 600, color: '#0f4021' },
  closeBtn: { background: 'none', border: 'none', cursor: 'pointer', padding: 4 },
  form: { display: 'flex', flexDirection: 'column', gap: 16 },
  formRow: { display: 'flex', gap: 14 },
  fieldWrap: { display: 'flex', flexDirection: 'column', gap: 5, flex: 1 },
  label: { fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 700, color: '#0f4021' },
  input: { fontFamily: "'Nunito', sans-serif", fontSize: 14, color: '#1a1816', background: '#fff', border: '1.5px solid #e7e5e2', borderRadius: 8, padding: '10px 12px', outline: 'none' },
  submitBtn: { background: '#ca9e3f', color: '#0f4021', padding: '13px', borderRadius: 8, fontSize: 14, fontWeight: 700, fontFamily: "'Nunito', sans-serif", border: 'none', cursor: 'pointer', marginTop: 4 },
  successMsg: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '32px 0', fontFamily: "'Nunito', sans-serif", fontSize: 15, color: '#0f4021', textAlign: 'center', lineHeight: 1.6 },
};

Object.assign(window, { Jobs });
