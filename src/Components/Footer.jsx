import React from "react";
import "../Styles/Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="sec">
          <img
            src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo2_footer.png"
            alt=""
          />
          <p>
            Users and submit their own items. You can create different packages
            and by connecting with your PayPal or Stripe account charge users
            for registration.
          </p>
          <div className="social">
            <i class="fa fa-facebook"></i>
          </div>
        </div>
        <div className="sec">
          <h2>Quick Links</h2>
          <a href="#">Classes</a>
          <a href="#">Join with us</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Events</a>
        </div>
        <div className="sec">
          <h2>About Us</h2>
          <a href="#">Our Team</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Testimonial</a>
          <a href="#">Programing</a>
          <a href="#">User Stories</a>
        </div>
      </div>
      <div className="bottom">
        Copyright 02023 All rights reserved I This template is made with by
        Colorlib
      </div>
    </footer>
  );
};
