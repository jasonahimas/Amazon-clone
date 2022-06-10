import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './Pages/Header'; 
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import {useStateValue} from './StateProvider'
import {auth} from './firebase'
import {useEffect} from "react"
import { Unsubscribe } from '@mui/icons-material';
function App() {
  const [{user},dispatch]=useStateValue();

  useEffect(() => {    //piece of code which runs based on a given condition(tooo powerful)
   const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //the user is logged in
        dispatch({
          type:"Set_User",
          user:authUser,
        })
      }else{
        //the user is logged out
        dispatch({
          type:"Set_User",
          user:null,
        })
      }
    })
    return()=>{
      // any cleanup operations go in here
      unsubscribe();
    }
  }, [])  //whatever is mentioned here updates after the variable is updated 
  console.log("User is >>>", user);  

  return (
  
    <Router>
      {/* <Header/> */}
    <Routes>
      {/* <Route  path="/" element={<Home />} /> */}
      {/* <Route  path="/" render={props =><div><Header/><Checkout/> </div>}/> */}
      <Route  path="/" element={<div><Header/><Home/> </div>}/>
      <Route  path="/login" element={<div><Login/> </div>}/>
      <Route  path="/checkout" element={<div><Header/><Checkout/> </div>}/>
      <Route  path="*" element={<div><Header/><Home/> </div>}/>
      {/* <Route  path="/login" render={<Login/>}/> */}
      {/* <Route  path="/checkout" element={<Checkout/>} /> */}
      <Route path="*"  element={<Home/> } />  // used if some random address is search

         </Routes>
     </Router>
     
  );
}

export default App;
