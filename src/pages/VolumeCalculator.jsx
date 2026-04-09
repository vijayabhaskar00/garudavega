import { useState } from 'react'

export default function VolumeCalculator() {
  const [l, setL] = useState('');
  const [w, setW] = useState('');
  const [h, setH] = useState('');
  
  const vWeight = (l && w && h) ? ((l * w * h) / 5000).toFixed(2) : 0;

  return (
    <div className="section" style={{minHeight: '80vh', display: 'flex', alignItems: 'center'}}>
      <div className="container">
        
        <div className="center reveal" style={{marginBottom: '60px'}}>
          <div className="chip d1" style={{marginBottom:16}}>Dimensional Weight</div>
          <h1 className="display" style={{fontSize: '56px'}}>VOLUME <span className="text-grad">CALCULATOR</span></h1>
          <p className="text-2" style={{maxWidth:'600px', margin:'16px auto 0'}}>International shipments are charged based on Volumetric Weight if it exceeds the Actual Weight. Calculate yours below.</p>
        </div>

        <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
           {/* Visualizer */}
           <div className="reveal-l d2" style={{flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{width: '240px', height: '240px', border: '2px dashed var(--orange)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                 <div className="mono" style={{position: 'absolute', top: '-30px', color: 'var(--text-3)'}}>WIDTH: {w||0} cm</div>
                 <div className="mono" style={{position: 'absolute', left: '-60px', transform: 'rotate(-90deg)', color: 'var(--text-3)'}}>HEIGHT: {h||0} cm</div>
                 <div className="mono" style={{position: 'absolute', bottom: '-40px', right: '-40px', transform: 'rotate(-30deg)', color: 'var(--text-3)'}}>LENGTH: {l||0} cm</div>
                 
                 <div style={{fontSize: '64px'}}>📦</div>
              </div>
           </div>

           {/* Calculator */}
           <div className="card reveal" style={{flex: '1 1 400px'}}>
              <div className="card-inner">
                <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                  <div>
                    <label className="mono" style={{fontSize: '12px', color: 'var(--text-3)', display: 'block', marginBottom: '8px'}}>LENGTH (CM)</label>
                    <input type="number" value={l} onChange={e=>setL(e.target.value)} style={{width: '100%', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                  </div>
                  <div>
                    <label className="mono" style={{fontSize: '12px', color: 'var(--text-3)', display: 'block', marginBottom: '8px'}}>WIDTH (CM)</label>
                    <input type="number" value={w} onChange={e=>setW(e.target.value)} style={{width: '100%', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                  </div>
                  <div>
                    <label className="mono" style={{fontSize: '12px', color: 'var(--text-3)', display: 'block', marginBottom: '8px'}}>HEIGHT (CM)</label>
                    <input type="number" value={h} onChange={e=>setH(e.target.value)} style={{width: '100%', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}} />
                  </div>
                  
                  <div style={{background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.2)', padding: '24px', borderRadius: '8px', textAlign: 'center', marginTop: '16px'}}>
                     <div className="mono" style={{color: 'var(--cyan)'}}>VOLUMETRIC WEIGHT</div>
                     <div className="display" style={{fontSize: '48px', color: '#fff', marginTop: '8px'}}>{vWeight} <span style={{fontSize: '24px'}}>KG</span></div>
                  </div>
                </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  )
}
