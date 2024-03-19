import React from 'react';
import image1 from '../Assets/Ornamental Flower 1.jpg';
import image2 from '../Assets/Ornamental Flower 2.jpg';
import image3 from '../Assets/Ornamental Flower 3.jpg';
import image4 from '../Assets/Ornamental Flower 4.jpg';
import image5 from '../Assets/Ornamental Flower 5.jpg';
import image6 from '../Assets/Ornamental Flower 6.jpg';
import image7 from '../Assets/Ornamental Flower 7.jpg';
import image8 from '../Assets/Ornamental Flower 3.jpg';

export default function Products() {
  return (
    <section className="Products">
    <h2>Products Available</h2>
    <div className="product-types">

        <div class="Product-card">
            <img src={image1} alt="Flower Picture" />
            <h3>Outdoors</h3>
            <button class="see-more">See more</button>

        </div>
        <div class="Product-card">
            <img src={image2} alt="Flower Picture" />
                <h3>Occasional</h3>
                <button class="see-more">See more</button>

        </div>
        <div class="Product-card">
            <img src={image3} alt="Flower Picture" />
            <h3>Picnic</h3>
            <button class="see-more">See more</button>

        </div>
        <div class="Product-card">

            <img src={image4} alt="Flower Picture" />
            <h3>Ornamental</h3>
            <button class="see-more">See more</button>

        </div>
        <div class="Product-card">

            <img src={image5} alt="Flower Picture" />
            <h3>Dreamy</h3>
            <button class="see-more">See more</button>

        </div>
        <div class="Product-card">

            <img src={image6} alt="Flower Picture" />
            <h3>Green</h3>
            <button className="see-more">See more</button>

        </div>
        <div class="Product-card">

            <img src={image7} alt="Flower Picture" />
            <h3>Fragile
            </h3>
                <button className="see-more">See more</button>

        </div>
        <div className="Product-card">

            <img src={image8} alt="Flower Picture" />
            <h3>Summer</h3>
            <button className="see-more">See more</button>

        </div>
    </div>

</section>
  )
}
