import React, { useState } from 'react'
import './Swiper.css'
import Switch from 'react-ios-switch'
import Advanced from '../examples/Advanced'
import Simple from '../examples/Simple'

function Swiper() {
    const [showAdvanced, setShowAdvanced] = useState(true)
  
    return (
    <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center', justifyContent: 'center', width: '100vw', overflow: 'hidden', background: 'linear-gradient(#e66465, #9198e5)', height: '100vh'}}>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div className='swiper'>
        {showAdvanced ? <Advanced /> : <Simple />}
        <div className='row'>
          <p style={{ color: '#fff' }}>Show advanced example</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} />
        </div>
      </div>
      </div>
      </div>
    )
  }
  
  export default Swiper