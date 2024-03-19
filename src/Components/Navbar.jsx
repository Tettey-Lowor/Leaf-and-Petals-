import React from 'react';
import image1 from '../Assets/Pink_Typography_Initial_LP_Logo-removebg-preview.png';


export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="icon">
                    <img src={image1} alt=""/>
                </div>
    <ul>
        <li>
            <a href="">Home</a>
        </li>
        <li>
            <a href="">Gallery</a>
        </li>
        <li>
            <a href="">About Us</a>
        </li>
        <li>
            <a href="">Features</a>
        </li>


        <li>
            <a href="">Contact Us</a>
        </li>
    </ul>
    <button className='btn'>Sign up</button>
</nav>

  )
}
