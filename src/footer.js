import React from 'react';
import "./footer.css";
const Footer = () => {
    return (
        <footer className="bg-dark text-white">
        <div
          style={{ padding: "10px", fontWeight: "600", fontSize: "18px" }}
          className="text-center"
        >
          &copy; 2023 Burner Mail
        </div>
        <div className="text-center">
          Made with{"   "}
          <img
            
            src="https://img.icons8.com/emoji/48/null/heart-suit.png"
            alt=""
            id='heart'
          />{"    "}
          by Hariom Arya
        </div>
      </footer>
    );
}

export default Footer;
