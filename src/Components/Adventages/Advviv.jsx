import React from 'react'

const Advviv = (props) => {
  return (
    <div className='Adv'>
        <div className="advviv-num">{props.item.number}</div>
        <div className="advviv-title">{props.item.title}</div>
    </div>
  )
}

export default Advviv