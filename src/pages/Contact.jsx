import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  
  const submit = e => {
    e.preventDefault();
    alert("Message sent. A Garudavega executive will contact you shortly.");
  }

  return (
    <div className="contact-page">
      <section className="page-hero" style={{paddingBottom: '80px'}}>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <h1 className="page-hero__title display" style={{fontSize: 'clamp(48px, 10vw, 80px)', marginBottom: '16px'}}>
            GET IN <span className="text-grad">TOUCH</span>
          </h1>
          <p className="page-hero__subtitle text-2">
            Have a question about customs, shipping rates, or packing? Our 24/7 dedicated support team in India and the USA is ready to help.
          </p>
        </div>
      </section>

      <section className="section" style={{paddingTop: 0}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px'}}>
            
            {/* Contact Form */}
            <div className="card reveal">
              <div className="card-inner">
                <h3 className="display" style={{fontSize: '36px', marginBottom: '8px'}}>SEND AN ENQUIRY</h3>
                <p className="text-2" style={{marginBottom: '32px'}}>Fill out the form and our logistics experts will call you back within 2 hours.</p>
                
                <form onSubmit={submit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                  <div>
                    <label className="mono" style={{fontSize: '12px', color: 'var(--text-3)', display: 'block', marginBottom: '8px'}}>FULL NAME</label>
                    <input required value={form.name} onChange={e=>setForm({...form, name: e.target.value})} style={{width: '100%', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                  </div>
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
                    <div>
                      <label className="mono" style={{fontSize: '12px', color: 'var(--text-3)', display: 'block', marginBottom: '8px'}}>EMAIL ADDRESS</label>
                      <input required type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} style={{width: '100%', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                    </div>
                    <div>
                      <label className="mono" style={{fontSize: '12px', color: 'var(--text-3)', display: 'block', marginBottom: '8px'}}>PHONE NUMBER</label>
                      <input required value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} style={{width: '100%', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                    </div>
                  </div>
                  <div>
                    <label className="mono" style={{fontSize: '12px', color: 'var(--text-3)', display: 'block', marginBottom: '8px'}}>YOUR REQUIREMENTS</label>
                    <textarea required rows={4} value={form.message} onChange={e=>setForm({...form, message: e.target.value})} style={{width: '100%', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                  </div>
                  <button type="submit" className="btn btn-fill" style={{marginTop: '16px', width: '100%', justifyContent:'center'}}>SUBMIT ENQUIRY</button>
                </form>
              </div>
            </div>

            {/* Branches / Info Container */}
            <div className="reveal d2" style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
              <div className="card">
                <div className="card-inner">
                  <h3 className="mono" style={{color: 'var(--cyan)', marginBottom: '16px'}}>HEAD OFFICE (INDIA)</h3>
                  <div className="display" style={{fontSize: '32px', marginBottom: '8px'}}>HYDERABAD HQ</div>
                  <p className="text-2">Plot No. 42, Vasanth Nagar,<br/>Kukatpally, Hyderabad,<br/>Telangana 500072, India</p>
                  <p className="mono" style={{marginTop: '16px', color: 'var(--orange)'}}>TEL: +91 80088 84931</p>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <h3 className="mono" style={{color: 'var(--cyan)', marginBottom: '16px'}}>CORPORATE OFFICE (USA)</h3>
                  <div className="display" style={{fontSize: '32px', marginBottom: '8px'}}>TEXAS BRANCH</div>
                  <p className="text-2">1234 Express Lane,<br/>Dallas, Texas 75001,<br/>United States</p>
                  <p className="mono" style={{marginTop: '16px', color: 'var(--orange)'}}>TEL: +1 (800) 123-4567</p>
                </div>
              </div>
              
              <div style={{background: 'rgba(255,85,0,0.05)', padding: '32px', borderRadius: '18px', border: '1px solid rgba(255,85,0,0.2)'}}>
                <h3 className="display" style={{fontSize: '28px', color: 'var(--orange)', marginBottom: '8px'}}>LOOKING FOR A LOCAL BRANCH?</h3>
                <p className="text-2" style={{marginBottom: '16px'}}>Garudavega has over 150 drop-off branches across India.</p>
                <button className="btn btn-stroke" style={{borderColor: 'var(--orange)', color: 'var(--orange)'}}>FIND NEAREST STORE</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
