import React from "react";
import image from '../Assets/WhatsApp Image 2024-01-28 at 6.49.08 PM.jpeg';
import image from '../Assets/WhatsApp Image 2024-02-10 at 10.35.55 PM.jpeg';
import image from '../Assets/WhatsApp Image 2024-02-13 at 8.48.52 PM.jpeg';
import image from '../Assets/Benewaa.jpeg';

export default function Team() {
  return (
    <section class="Team">
      <h2>Meet our Team</h2>

      <div class="Team-types">
        <div class="Team-Names">
          <div>
            <img
              src="assets/WhatsApp Image 2024-01-28 at 6.49.08 PM.jpeg"
              alt="flower woman"
            />
          </div>
          <div>
            <h4>Freda Menz</h4>
          </div>
        </div>
        <div class="Team-Names">
          <div>
            <img
              src="assets/WhatsApp Image 2024-02-10 at 10.35.55 PM.jpeg"
              alt="flower woman"
            />
          </div>
          <div>
            <h4>Ella Fiji</h4>
          </div>
        </div>

        <div class="Team-Names">
          <div>
            <img
              src="assets/WhatsApp Image 2024-02-13 at 8.48.52 PM.jpeg"
              alt="flower woman"
            />
          </div>
          <div>
            <h4>Jerry Bonz</h4>
          </div>
        </div>

        <div class="Team-Names">
          <div>
            <img src="assets/Benewaa.jpeg" alt="flower woman" />
          </div>
          <div>
            <h4>Jennifer Yags</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
