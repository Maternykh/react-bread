import React from 'react'
import ArrUsl from './ArrUsl'

const Uslugi = () => {
  return (<div id='usl'>
    <div className='Uslugi'>
      <div className="usl-image">
        <img src="./2.jpg" className='usl-image-image' />
        <div className="usl-text">Наши услуги</div>
      </div>
      <ArrUsl/>
    </div>
    </div>
  )
}

export default Uslugi