import React from 'react'
import {FiSmartphone} from 'react-icons/fi'
const Messege = () => {
  return (<div id='ques'>
    <div className='Messege'>
        <div className="phone">
        <FiSmartphone className='phone-icon'/>
        </div>
        <div className="answear">Есть вопрос?</div>
        <div className="question">Позвоните нам сегодня ​+1 777 000 0000 или по электронной почте</div>
    </div>
    </div>
  )
}

export default Messege