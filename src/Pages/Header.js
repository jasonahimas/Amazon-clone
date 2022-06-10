import React from 'react'
import Home from './Home'
import "./Header.css"
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from "../StateProvider"
import {auth} from "../firebase"
function Header() {
   const [{basket,user}]=useStateValue();
  const login= ()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
     
    <nav className='header'> 
      
      <img className='header_logo' src='/amazon_logo1.png'></img>
      <div className='header_search'>
        <input type="text" className='header_searchinput'/>
        <SearchIcon className='header_searchicon'/>
        </div>
        <div className='header_nav'>
        <Link to ={!user &&  "/login"}  className="header_link" >
        <div onClick={login}  className="header_option">
        <p className='hl1'>Hello {user?.email} </p>
        <p className='hl2'>{user ?"Sign Out" : "Sign In" }</p>
        </div>
        </Link>
       
        <Link to ="/"  className="header_link" >
        <div className="header_option">
        <p className='hl1'>Return</p>
        <p className='hl2'>& Orders</p>
        </div>
        </Link>
        
        <Link to ="/"  className="header_link" >
        <div className="header_option">
        <p className='hl1'>Your</p>
        <p className='hl2'>Prime</p>
        </div>
        </Link>
       
        <Link to ="/checkout" className='header_link'>
        <div className="header_basket">
        <ShoppingBasketIcon/> 
         <span className='header_basketcount'>{basket.length}</span>
        </div>
        </Link>



        </div>
        </nav>
    
  )
}

export default Header