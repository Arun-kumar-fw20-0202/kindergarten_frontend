import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "@chakra-ui/react";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    document.querySelector("header").classList.toggle("active");
  };

  return (
    <header>
      <div className="logo">
        <div className="ham" onClick={handleShow}></div>
        <img
          src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png"
          alt=""
        />
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">Class</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <button>Enroll Now</button>
      </div>
    </header>
  );
};
