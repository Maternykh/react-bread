import React from 'react'
import {BsFillHouseFill,BsQuestionCircleFill,BsFileEarmarkRuledFill} from 'react-icons/bs'
import {FaHandshake,FaBreadSlice} from 'react-icons/fa'
import {GiSwordBrandish} from 'react-icons/gi'
import {TbTargetArrow} from 'react-icons/tb'
import {BiSolidTimeFive} from 'react-icons/bi'

const Aside = () => {
  return (
    <div className="aside">
      <div className="href">
        <a href="#pres" className="ssilk" title='Домашняя'>
          <BsFillHouseFill className='icon'/>
        </a>
      </div>
      <div className="href">
        <a href="#usl" className="ssilk">
          <FaHandshake className='icon'/>
        </a>
      </div>
      <div className="href">
        <a href="#pont" className="ssilk">
          <GiSwordBrandish className='icon'/>
        </a>
      </div>
      <div className="href">
        <a href="#miss" className="ssilk">
          <TbTargetArrow className='icon'/>
        </a>
      </div>
      <div className="href">
        <a href="#item" className="ssilk">
          <FaBreadSlice className='icon'/>
        </a>
      </div>
      <div className="href">
        <a href="#ques" className="ssilk">
          <BsQuestionCircleFill className='icon'/>
        </a>
      </div>
      <div className="href">
        <a href="#men" className="ssilk">
          <BsFileEarmarkRuledFill className='icon'/>
        </a>
      </div>
      <div className="href">
        <a href="#vis" className="ssilk">
          <BiSolidTimeFive className='icon'/>
        </a>
      </div>
    </div>
  )
}

export default Aside