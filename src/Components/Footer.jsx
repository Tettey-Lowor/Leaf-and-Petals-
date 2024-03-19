import React from 'react'

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="social-icons">
          <a href=""> <i class="fa-brands fa-facebook"></i></a>
          <a href=""> <i class="fa-brands fa-instagram"></i></a>
          <a href=""> <i class="fa-brands fa-snapchat"></i></a>
        </div>

        <div class="footernav">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Locate Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          Copyright &copy;2022 Designed by
          <span class="designer">Leaf and Petals</span>
        </p>
      </div>
    </footer>
  )
}
