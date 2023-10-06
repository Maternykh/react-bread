import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Aside from './Aside';
const Header = () => {
  const[isAside,setIsAside] = useState(false)
  const aside = event => {
    setIsAside(!isAside);
  };
  return (
    <div>
      <div className='Header'>
        <div className="logo">Logo</div>
        <div className="menudiv"><AiOutlineMenu className='menu' onClick={aside}/></div>
      </div>
      <div>{isAside && <Aside/>}</div>
    </div>
  )
}

export default Header