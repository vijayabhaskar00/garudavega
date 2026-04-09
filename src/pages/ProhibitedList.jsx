export default function ProhibitedList() {
  const lists = [
    { cat: 'Hazardous Materials', items: ['Aerosols & Sprays', 'Nail Polish & Perfumes', 'Lithium Batteries (loose)', 'Fireworks & Explosives', 'Corrosives (Acids)'] },
    { cat: 'Perishables', items: ['Fresh Fruits & Vegetables', 'Raw Meat/Fish', 'Dairy Products requiring refrigeration'] },
    { cat: 'Restricted Items', items: ['Currency & Coins', 'Precious Metals & Stones', 'Passports & Valid IDs (without special approval)', 'Prescription Drugs (without prescription)'] },
  ]

  return (
    <div className="section" style={{minHeight: '80vh'}}>
      <div className="container">
        
        <div className="reveal" style={{marginBottom: '40px'}}>
          <div className="chip d1" style={{marginBottom:16, borderColor: 'red', color: 'red'}}>Customs Compliance</div>
          <h1 className="display" style={{fontSize: '56px'}}>PROHIBITED <span className="text-grad">ITEMS</span></h1>
          <p className="text-2" style={{maxWidth:'600px', marginTop:'16px'}}>For safety and customs reasons, the following items are strictly prohibited from being shipped internationally via Garudavega.</p>
        </div>

        <div className="bento-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridAutoRows: 'auto'}}>
           {lists.map((l, i) => (
             <div key={i} className="card reveal" style={{animationDelay: `${0.1 * i}s`}}>
               <div className="card-inner">
                 <h3 className="mono" style={{color: 'var(--orange)', marginBottom: '24px', fontSize: '18px'}}>{l.cat}</h3>
                 <ul style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                   {l.items.map((item, j) => (
                     <li key={j} style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                        <span style={{color: 'red'}}>🚫</span>
                        <span style={{color: 'var(--text-2)', fontSize: '15px'}}>{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           ))}
        </div>

        <div className="card reveal d4" style={{marginTop: '40px', background: 'rgba(255,0,0,0.05)', borderColor: 'rgba(255,0,0,0.2)'}}>
           <div className="card-inner" style={{textAlign: 'center'}}>
              <h3 className="display" style={{fontSize: '32px', color: '#ff4444'}}>UNSURE ABOUT AN ITEM?</h3>
              <p className="text-2" style={{margin: '16px 0 24px'}}>If you're not sure whether your item is allowed, please contact our customs clearance experts before booking your shipment.</p>
              <button className="btn btn-stroke" style={{borderColor: '#ff4444', color: '#ff4444'}}>CONTACT SUPPORT</button>
           </div>
        </div>

      </div>
    </div>
  )
}
