import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from '../StateProvider' 
function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
     dispatch({
         type:"Remove_From_Basket",
         id:id,
     }) 
    }
  return (
    <div className='checkoutProduct'>
        
        <img className='checkoutProduct_image'src={image} alt="" />
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
             <small>₹</small>
             <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
            {Array(rating)
        .fill()
        .map(() =>(
          <p><strong>⭐</strong></p>
        ))}
         </div>    
         <button onClick={removeFromBasket}>Remove from Basket</button>
        
        </div>
       
    </div>
  )
}

export default CheckoutProduct