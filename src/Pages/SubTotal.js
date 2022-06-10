import React from 'react'
import './SubTotal.css' 
import CurrencyFormat from 'react-currency-format'; 
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
function SubTotal() {
    const [{basket},dispatch]=useStateValue();

  return (
    <div className='subtotal'>
     
     <CurrencyFormat
      renderText={(value)=>(
       <>
   
       <p>
           Subtotal({basket.length} items):<strong>{ value}</strong>
       </p>
       <small className='subtotal_gift'>
       <input type='checkbox'/> This order contains a gift

       </small>

       
      
       </>


      )}



       decimalScale={2}
    //    value={getBasketTotal(basket)}
    value={getBasketTotal(basket)}
       displayType={"text"}
       thousandSeparator={true}
       prefix={"₹"}
       thousandSpacing={'2s'}
/>
     <button >Proceed to Checkout</button>

    </div>
  )
}

export default SubTotal