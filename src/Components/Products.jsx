import React from 'react';
import image from '../Assets/Ornamental Flower 1.jpg';
import image from '../Assets/Ornamental Flower 2.jpg';
import image from '../Assets/Ornamental Flower 3.jpg';
import image from '../Assets/Ornamental Flower 4.jpg';
import image from '../Assets/Ornamental Flower 5.jpg';
import image from '../Assets/Ornamental Flower 6.jpg';
import image from '../Assets/Ornamental Flower 7.jpg';
import image from '../Assets/Ornamental Flower 3.jpg';

export default function Products() {
  return (
    <Section class="Products">
    <h2>Products Available</h2>
    <div class="product-types">

        <div class="Product-card">
            <img src="assets/Ornamental Flower 1.jpg" alt="Flower Picture" />
            <h3>Outdoors</h3>
            <Button class="see-more">See more</Button>

        </div>
        <div class="Product-card">
            <img src="assets/Ornamental Flower 2.jpg" alt="Flower Picture" />
                <h3>Occasional</h3>
                <Button class="see-more">See more</Button>

        </div>
        <div class="Product-card">
            <img src="assets/Ornamental Flower 3.jpg" alt="Flower Picture" />
            <h3>Picnic</h3>
            <Button class="see-more">See more</Button>

        </div>
        <div class="Product-card">

            <img src="assets/Ornamental Flower 4.jpg" alt="Flower Picture" />
            <h3>Ornamental</h3>
            <Button class="see-more">See more</Button>

        </div>
        <div class="Product-card">

            <img src="assets/Ornamental Flower 5.jpg" alt="Flower Picture" />
            <h3>Dreamy</h3>
            <Button class="see-more">See more</Button>

        </div>
        <div class="Product-card">

            <img src="assets/Ornamental Flower 6.jpg" alt="Flower Picture" />
            <h3>Green</h3>
            <Button class="see-more">See more</Button>

        </div>
        <div class="Product-card">

            <img src="assets/Ornamental Flower 7.jpg" alt="Flower Picture" />
            <h3>Fragile
            </h3>
                <Button class="see-more">See more</Button>

        </div>
        <div class="Product-card">

            <img src="assets/Flower Pic 3.jpg" alt="Flower Picture" />
            <h3>Summer</h3>
            <Button class="see-more">See more</Button>

        </div>
    </div>

</Section>
  )
}
