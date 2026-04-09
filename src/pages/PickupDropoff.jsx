import { useState } from 'react'

export default function PickupDropoff() {
  const [hasMedicine, setHasMedicine] = useState('No');
  
  return (
    <div className="section" style={{minHeight: '80vh'}}>
      <div className="container">
        
        <div className="reveal" style={{marginBottom: '60px'}}>
          <div className="chip d1" style={{marginBottom:16, borderColor: 'var(--cyan)', color: 'var(--cyan)'}}>Pricing & Pickup</div>
          <h1 className="display" style={{fontSize: '56px'}}>SHIP FROM <span className="text-grad">INDIA</span></h1>
          <p className="text-2" style={{maxWidth:'800px', margin:'16px 0 0', lineHeight: 1.8}}>
            Garudavega provides shipping services worldwide originating from India and from USA. We proudly service over 230+ countries.<br/><br/>
            <span style={{color: 'var(--orange)'}}>To ship from USA – go to <a href="https://my.garudavega.com" target="_blank" rel="noreferrer" style={{color: 'var(--cyan)', textDecoration: 'underline'}}>my.garudavega.com</a></span><br/>
            Pl. refer to the following to get our current prices to ship from India.
          </p>
        </div>

        <div className="card reveal d2">
           <div className="card-inner">
             
             {/* Form Grid */}
             <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '40px'}}>
                <div>
                   <label className="mono" style={{color: 'var(--text-3)', fontSize: '12px', display: 'block', marginBottom: '12px'}}>DESTINATION COUNTRY</label>
                   <select style={{width: '100%', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}}>
                      <option>UNITED STATES</option>
                      <option>UNITED KINGDOM</option>
                      <option>AUSTRALIA</option>
                      <option>CANADA</option>
                   </select>
                </div>

                <div>
                   <label className="mono" style={{color: 'var(--text-3)', fontSize: '12px', display: 'block', marginBottom: '12px'}}>DOES THE CONSIGNMENT HAVE MEDICINE?</label>
                   <div style={{display: 'flex', gap: '16px'}}>
                      <button onClick={() => setHasMedicine('Yes')} className={`btn ${hasMedicine === 'Yes' ? 'btn-fill' : 'btn-stroke'}`} style={{flex: 1, justifyContent: 'center'}}>Yes</button>
                      <button onClick={() => setHasMedicine('No')} className={`btn ${hasMedicine === 'No' ? 'btn-fill' : 'btn-stroke'}`} style={{flex: 1, justifyContent: 'center'}}>No</button>
                   </div>
                </div>

                <div>
                   <label className="mono" style={{color: 'var(--text-3)', fontSize: '12px', display: 'block', marginBottom: '12px'}}>WEIGHT (KG)</label>
                   <input type="number" placeholder="Enter Weight" style={{width: '100%', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                </div>

                <div>
                   <label className="mono" style={{color: 'var(--text-3)', fontSize: '12px', display: 'block', marginBottom: '12px'}}>PACKAGE TYPE</label>
                   <select style={{width: '100%', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}}>
                      <option>Non Docs</option>
                      <option>Documents</option>
                   </select>
                </div>
             </div>
             
             {/* Disclaimer Notes */}
             <div style={{padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px dashed rgba(255,85,0,0.3)'}}>
                 <ul style={{display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-3)', fontSize: '13px', lineHeight: 1.6, paddingLeft: '16px'}}>
                    <li>* GST is applicable at 18% as per norms of Govt of India.</li>
                    <li>* Max weight for medicine shipments is limited up to 1 Kg and/or 3 months' supply. Prescription and GST included purchase receipts are mandatory.</li>
                    <li>* The rates quoted above are based on the weights specified. Shipping weight will be calculated as the higher of actual weight of the shipment and the volumetric weight. Pl. refer to Volumetric Calculation.</li>
                    <li>* Weights will be rounded up to the nearest .5kg for shipments under 20kgs and will be rounded up to nearest 1 kg for shipments over 20 kgs.</li>
                    <li>* Final charges will depend upon the actual weights measured at the time of tendering the shipment.</li>
                 </ul>
                 <p className="mono" style={{color: 'var(--orange)', fontSize: '12px', marginTop: '16px'}}>Note: In case any additional charges apply as per the terms and conditions, they will be added addtional charges at the time of booking.</p>
             </div>

             <div style={{marginTop: '32px', textAlign: 'center'}}>
               <button className="btn btn-fill" style={{transform: 'scale(1.1)'}}>GET PRICING & BOOK PICKUP</button>
             </div>

           </div>
        </div>

      </div>
    </div>
  )
}
