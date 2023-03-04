import React from 'react';
import './Footer.css';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_content_left">
          <h1>MCentral</h1>
          <p>support@mcentral.com</p>
          <div className="footer_icons">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
        <div className="footer_content_right">
          <div className="about">
            <p className="footer_name">About</p>
            <p>Movies</p>
            <p>Series</p>
            <p>Genre</p>
          </div>
          <div className="contact">
            <p className="footer_name">Contact</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
          <div className="support">
            <p className="footer_name">Support</p>
            <p>FAQs</p>
            <p>Support Center</p>
            <p>Contact us</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023 Soni Setiawan.</p>
        <p>Credit: themoviedb.org</p>
      </div>
    </>
  );
};

export default Footer;
