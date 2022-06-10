 import React from 'react'
 import { Link } from 'react-router-dom';
 import './Home.css';
import Header from './Header'
import Product from '../Product'

 function Home() {
   return (
    // <Link to ="/">

    <div className='home'>
    
     <img src='banner_img.jpg' className='home_banner'></img>
     <div className='home_row'>
     <Product id={1121214} 
     title ="The Lean Startup :How Constant Innovation Creates"
     price={395}
      rating ={5}
       image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"> 
       </Product> 
       <Product id={1121214} 
     title ="Apple iPhone 13 Pro (128GB) - Sierra Blue"
     price={119599}
      rating ={5}
       image="https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UY218_.jpg"> 
       </Product> 
     </div> 
     <div className='home_row'>
     <Product id={1121214} 
     title ="Faber 12 Place Settings Dishwasher (Neo Black, Best suited for Indian Kitchen, Hygiene Wash)"
     price={22000}
      rating ={4}
       image="https://m.media-amazon.com/images/I/51H6c6oxnhL._SX679_.jpg "> 
       </Product> 
       <Product id={1121214} 
     title ="Samsung Galaxy Buds Pro | 99% Noise Cancellation, Wireless Charging, 28 Hours Playtime | Violet"
     price={20000}
      rating ={5}
       image="https://m.media-amazon.com/images/I/516+h7HKsyL._AC_UY218_.jpg"> 
       </Product> 
       <Product id={1121214} 
     title ="Garmin Venu Square - Shadow Grey/Slate Smartwatch"
     price={16000}
      rating ={4}
       image="https://m.media-amazon.com/images/I/61u9rpZnleS._SY450_.jpg"> 
       </Product> 
     </div>
     <div className='home_row'>
     <Product id={1121214} 
     title ="PHILIPS Brilliance 499P9H1/75 124.46 cm (49-inch) Curved SuperWide Dual QHD LCD Display"
     price={108999}
      rating ={4}
       image="https://m.media-amazon.com/images/I/61PnS+zB2QL._AC_UY218_.jpg"> 
       </Product> 
     </div>
     
    </div>
    // </Link>
   )
 }
 
 export default Home