import React, { useState } from 'react'

const ArrUsl = () => {
    const [users, setUsers] = useState([
        {
            icon:"./3.jpg",
            title:'Хлеб',
            desc:'Excepteur sint occaecat cupidat non proident, sunt in culpa qui officia deserunt',
            fulldesc:'Хлеб - это один из самых популярных и традиционных видов хлебобулочных изделий, который присутствует в кухнях многих стран мира. В интернет-пекарне мы предлагаем широкий ассортимент хлеба, приготовленного по классическим и оригинальным рецептам. В нашем хлебе используются только высококачественные ингредиенты, такие как мука высшего сорта, свежие дрожжи, соль, вода и натуральные специи. Благодаря этому, наш хлеб обладает неповторимым ароматом, пышной текстурой и насыщенным вкусом.',
            isOpendesc:false,
        },
        {
            icon:"./4.jpg",
            title:'Выпечка',
            desc:'Excepteur sint occaecat cupidat non proident, sunt in culpa qui officia deserunt',
            fulldesc:'Выпечка – это широкий ассортимент хлебобулочных и кондитерских изделий, которые являются неотъемлемой частью меню нашей интернет-пекарни. Мы предлагаем как классические, так и оригинальные рецепты, используя только высококачественные и свежие ингредиенты. Наша выпечка отличается пышностью, ароматом и неповторимым вкусом.',
            isOpendesc:false,

        },
        {
            icon:"./5.jpg",
            title:'Торты',
            desc:'Excepteur sint occaecat cupidat non proident, sunt in culpa qui officia deserunt',
            fulldesc:'Торт – это изысканное кондитерское изделие, которое является украшением любого праздника. В нашей интернет-пекарне вы найдете широкий ассортимент тортов на любой вкус. Мы предлагаем классические рецепты, а также оригинальные и эксклюзивные торты, созданные нашими кондитерами.',
            isOpendesc:false,
        },
        {
            icon:"./6.jpg",
            title:'Пицца',
            desc:'Excepteur sint occaecat cupidat non proident, sunt in culpa qui officia deserunt',
            fulldesc:'Пицца - это одно из самых популярных блюд в мире, которое любят и взрослые, и дети. В нашей интернет-пекарне мы предлагаем огромный выбор пицц на любой вкус, изготовленных по традиционным и оригинальным рецептам с использованием только самых свежих и качественных ингредиентов.',
            isOpendesc:false,
        },
    ])
    const handlechange = (index) => {
        const newUsers = [...users];
        newUsers[index].isOpendesc = true;
        setUsers(newUsers);
        console.log(newUsers)
    };
  return (
    <div className='ArrUsl'>
         {users.map((el, index) => (
          <div key={index} className='ArrViv'>
            <div className="arrviv-img">
                <img src={el.icon} />
            </div>
            <div className="arrviv-title">{el.title}</div>
            <div className="arriv-desc">{el.desc}</div>
            <div className="arrviv-fulldesc"  onClick={() => {handlechange(index);}}>Более</div>
            {el.isOpendesc && (<div className='arrviv-fulldesc-desc'>{el.fulldesc}</div>)}
          </div>
         ))}
    </div>
  )
}

export default ArrUsl