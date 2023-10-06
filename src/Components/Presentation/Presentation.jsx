import React from 'react'
import Presstext from './Presstext'

const Presentation = () => {
  return (
    <div id='pres'>
        <div className="pres-image">
            <img src="./1.jpg" className='pres-image-image'/>
        </div>
        <Presstext/>
    </div>
  )
}

export default Presentation