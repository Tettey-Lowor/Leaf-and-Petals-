import React from 'react';
import Navbar from './Navbar';
// import image1 from '../Assets/Pink_Typography_Initial_LP_Logo-removebg-preview.png'
import image2 from '../Assets/Ornamental Flower 3.jpg';

export default function Header() {
    return (
        <>
       
        <div className='bg'
         style={{
            backgroundImage:`url(${image2})`
        }}> 
                 <Navbar/>
        <div className="header-texts">
            
        
                <div class="yes">
                    <h1 className="">Welcome to Leaf&Petals, where we see a greener future</h1>
                    <h1>look into the future with.... <span class="icon">Leaf&Petals</span>

                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, libero culpa nis ea culpa
                        mollitia.

                    </p>
                </div>
            </div>
            </div>

        </>
    
    )
}
