import React, { useState } from 'react'
import {TbBasket} from 'react-icons/tb'

const Items = () => {
    const [showsOrder, setIsShownOrder] = useState(false)
    const shown = event => {
        setIsShownOrder(!showsOrder);
      };
    const [items, setItems] = useState([
        {
            image:"./10.jpg",
            title:'БАГЕТ',
            desc:'Багет на закваске мелкосерийный.',
            price:'4.5',
            isOrder:false,
        },
        {
            image:"./11.jpg",
            title:'СЕЛЬСКОХОЗЯЙСТВЕННЫЙ ХЛЕБ',
            desc:'Sample text. Click to select the Text Element.',
            price:'5.25',
            isOrder:false,

        },
        {
            image:"./12.jpg",
            title:'СМЕШАННОЕ ЗЕРНО',
            desc:'Sample text. Click to select the Text Element.',
            price:'4.5',
            isOrder:false,
        },
        {
            image:"./13.jpg",
            title:'МОЛОЧНЫЙ ХЛЕБ',
            desc:'Sample text. Click to select the Text Element.',
            price:'3.55',
            isOrder:false,
        },
        {
            image:"./14.jpg",
            title:'КОРИЧНЕВЫЙ ХЛЕБ',
            desc:'Sample text. Click to select the Text Element.',
            price:'2.45',
            isOrder:false,
        },
        {
            image:"./15.jpg",
            title:'СЫРНЫЙ ХЛЕБ',
            desc:'Sample text. Click to select the Text Element.',
            price:'5.5',
            isOrder:false,
        },
        {
            image:"./16.jpg",
            title:'КРУАССАН',
            desc:'Sample text. Click to select the Text Element.',
            price:'1.8',
            isOrder:false,
        },
        {
            image:"./17.jpg",
            title:'СИННАБОН',
            desc:'Sample text. Click to select the Text Element.',
            price:'1.5',
            isOrder:false,
        },
    ])
    const AddOrder = (index) => {
        const newUsers = [...items];
        newUsers[index].isOrder = true;
        setItems(newUsers);
        console.log(newUsers)
    };
  return (<div id='item'>
    <div className='Items'>
        {items.map((item,index) => (
            <div className='element' key={index}>
                <div className="item-img">
                    <img src={item.image} />
                </div>
                <div className="item-title">{item.title}</div>
                <div className="item-desc">{item.desc}</div>
                <div className="item-price">${item.price}</div>
                <div className="item-buy"  onClick={() => {AddOrder(index);}}>в корзину</div>
            </div>
        ))}
        <div className="cors" onClick={shown}>
            <TbBasket className='tbbasc'/>
        </div>
        {showsOrder && <div className="orderer">
            {items.map((item,index) => {if (item.isOrder){return (
                <div className='orderer-element' key={index}>
                    <div className="flex">
                        <div className="orderer-item-img">
                            <img src={item.image} className='orderer-item-image'/>
                        </div>
                        <div>
                            <div className="orderer-title">{item.title}</div>
                            <div className="orderer-price">${item.price}</div>
                        </div>
                    </div>
                </div>
            )}})}
        </div>}
    </div>
    </div>
  )
}

export default Items