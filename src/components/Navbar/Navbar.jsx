import React, { useContext, useState } from 'react';

import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/shopping-bag.png'
import account_icon from '../Assets/account.png'
import { Link } from 'react-router-dom';
import { CollectionContext } from '../../context/CollectionContext';
const Navbar = () => {
    const [menu, setMenu] = useState("Collection");
    const {getTotalCartItems}= useContext(CollectionContext);
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            
        </div>
        <ul className="nav-menu" >
            <li onClick={()=>{setMenu("Collection")}}><Link style={{textDecoration: 'none'}} to='/'>Collection</Link>{menu==="Collection"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Bottom Wear")}}><Link style={{textDecoration: 'none'}} to='/Bottom Wear'>Bottom Wear</Link>{menu==="Bottom Wear"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Tops")}}><Link style={{textDecoration: 'none'}} to='/Tops'>Tops</Link>{menu==="Tops"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Dresses")}}><Link style={{textDecoration: 'none'}} to='/Dresses'>Dresses</Link>{menu==="Dresses"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-options">
            <div className="cart">
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>  
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            <div className="account">
                <Link to='/account'><img src={account_icon} alt=""/></Link>
            </div>
            
        </div>

      
    </div>
  )
}

export default Navbar
