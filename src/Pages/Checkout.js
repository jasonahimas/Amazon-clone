import React from 'react'
import { useStateValue } from '../StateProvider'
import Header from './Header'
import Home from './Home'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'
function Checkout() {
  const [{basket}]=useStateValue();
  return (

    <div className='checkout'>
    
     {/* <div className='checkout_'></div> */}
     <div className='checkout_ad'>
       <div className='checkout_left'>

       < img  className='checkout_add1'src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
       </div>
      {basket.length===0 ?(
        <div>
          <h2>Your Basket is Empty</h2>
          <p>You have no items in the basket,to buy one or more items,click "Add to Basket" next to the item</p>
          
        </div>
      ):(
        <div>
          <h2 className='checkout_title'>Your Shopping Basket</h2>
          {/* <hr /> */}
          {basket.map(item=>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
            ))}
        </div>
      )}
</div>
  {basket.length>0 && (
   <div className="checkout_right">
     {/* <h1>Subtotal</h1> */}
     <SubTotal/>
   </div>
 
  )}
   
    
    </div>
  )
}

export default Checkout