import React from 'react'
import './NavBar.css'

const NavBar=()=> {
  return (
    <div>
        <nav>
        {/* <label className='logo'>Design</label> */}
        <ul>
            <li> <a className='active' href="#">Home</a></li>
            <li> <a href="#">HeadPhones</a></li>
            <li> <a href="#">Smartphone</a></li>
            <li> <a href="#">Smart Accessories</a></li>
            <li><a href="#">Mouse&Keyboards</a></li>
            {/* <li><a href="#">Fresh</a></li>
            <li><a href="#">Online Pharmacy</a> </li> */}
            
        </ul>
    </nav>
    </div>
  )
}

export default NavBar;