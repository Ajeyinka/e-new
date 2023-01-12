import React from 'react';
import { useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';




const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [toggleNav, setToggleNav] = useState(false);
 
  return (
    <div className='navbar-container'>
        <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <p className='logo'>
          Nada Store
        </p>
  
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="/">Home</a></li>
        <li className='p__opensans'><a href="#men">Men</a></li>
        <li className='p__opensans'><a href="#women">Women</a></li>
        <li className='p__opensans'><a href="#gallery">Gallery</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
        
      </ul>
      
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#000' fontSize={27} onClick={() => setToggleNav(true)}/>

        {toggleNav && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <AiOutlineClose  fontSize={27} color='white' className="overlay__close" onClick={() => setToggleNav(false)} />
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#men">Men</a></li>
            <li className='p__opensans'><a href="#women">Menu</a></li>
            <li className='p__opensans'><a href="#gallery">Gallery</a></li>
            <li className='p__opensans'><a href="#contact">Contact</a></li>
         </ul>
        </div>) }
        
  
      </div>
    </nav>

        <button type="button" className='cart-icon' onClick={() => 
          setShowCart(true)}>
            <AiOutlineShopping />
            <span className='cart-item-qty'>{totalQuantities}</span>
            
        </button>
        
       {showCart && <Cart />}

        

    </div>
  )
}

export default Navbar