import { useState } from 'react'

export default function OrderShipment() {
  const [step, setStep] = useState(1);

  return (
    <div className="section" style={{minHeight: '80vh', display: 'flex', alignItems: 'center'}}>
      <div className="container" style={{maxWidth: '800px', width: '100%'}}>
        
        <div className="center reveal" style={{marginBottom: '40px'}}>
          <div className="chip d1" style={{marginBottom:16}}>Fast Book</div>
          <h1 className="display" style={{fontSize: '56px'}}>ORDER <span className="text-grad">SHIPMENT</span></h1>
        </div>

        <div className="card reveal d2">
          <div className="card-inner">
            
            {/* Stepper */}
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '40px', borderBottom: '1px solid var(--line)', paddingBottom: '20px'}}>
               <div style={{color: step===1?'var(--orange)':'var(--text-3)'}} className="mono">01. ORIGIN</div>
               <div style={{color: step===2?'var(--orange)':'var(--text-3)'}} className="mono">02. DESTINATION</div>
               <div style={{color: step===3?'var(--orange)':'var(--text-3)'}} className="mono">03. DETAILS</div>
            </div>

            {/* Form Steps */}
            {step === 1 && (
              <div className="anim-fade">
                <h3 className="display" style={{fontSize: '32px', marginBottom: '20px'}}>SENDER DETAILS</h3>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                  <input placeholder="Full Name" style={{background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                  <input placeholder="Phone / Mobile" style={{background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                  <input placeholder="City (e.g., Hyderabad)" style={{background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                  <input placeholder="Pincode" style={{background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                </div>
                <button className="btn btn-fill" style={{marginTop: '32px', width: '100%', justifyContent:'center'}} onClick={() => setStep(2)}>NEXT STEP</button>
              </div>
            )}

            {step === 2 && (
              <div className="anim-fade">
                <h3 className="display" style={{fontSize: '32px', marginBottom: '20px'}}>RECEIVER DETAILS</h3>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                   <input placeholder="Receiver Name" style={{background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                   <select style={{background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}}>
                      <option>Select Country</option>
                      <option>United States (USA)</option>
                      <option>United Kingdom (UK)</option>
                      <option>United Arab Emirates (UAE)</option>
                      <option>Australia</option>
                   </select>
                   <textarea placeholder="Full Delivery Address" style={{gridColumn: '1 / 3', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                </div>
                <div style={{display: 'flex', gap: '16px', marginTop: '32px'}}>
                  <button className="btn btn-dark" style={{flex: 1, justifyContent:'center'}} onClick={() => setStep(1)}>BACK</button>
                  <button className="btn btn-fill" style={{flex: 2, justifyContent:'center'}} onClick={() => setStep(3)}>CONTINUE TO PARCEL</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="anim-fade" style={{textAlign: 'center'}}>
                <div style={{fontSize: '64px', marginBottom: '16px'}}>✅</div>
                <h3 className="display" style={{fontSize: '32px', color: 'var(--cyan)'}}>ALREADY LOGGED?</h3>
                <p className="text-2" style={{marginBottom: '32px'}}>Your draft has been saved. Our logistics agent will call you within 10 minutes to verify weight and schedule the pickup.</p>
                <button className="btn btn-stroke" style={{justifyContent:'center'}} onClick={() => setStep(1)}>START NEW ORDER</button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
