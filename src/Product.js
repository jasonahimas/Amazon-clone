import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({id,title,image,price,rating}) {
  const [{basket},dispatch] =useStateValue();

  const addToBasket=()=>{
    dispatch({
    type:"Add_To_Basket",
    item:{
      id:id,
      title:title,
      image: image,
      price: price,
      rating: rating,
    },
  });
  };

  return (

    <div className='product'>
      
      <div className='product_info'>
      <p>{title}</p>
      <p className='product_price'>
        <small> ₹</small>
        <strong>{price}</strong>
        </p>
      <div className='product_rating'>
        {Array(rating)
        .fill()
        .map(() =>(
          <p><strong>⭐</strong></p>
        ))}
        
        </div>
      </div>
      <div className='product_image'><img src={image}/></div>
      <div className='product_button'>
      <button onClick={addToBasket} >Add to Basket</button>
      </div>
    </div>
  )
}

export default Product