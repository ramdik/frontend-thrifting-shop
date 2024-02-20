import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './Footer.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className="Footer text-light py-4 mt-4">
      <Container className='d-flex justify-content-around flex-row'>
        <div className="about-container" style={{ flex: "1", textAlign: "center" }}>
          <p>About Us</p>
          <div className="shop-name-container">
          <p className='shop-name fs-3' onClick={() => {navigate('/')}}>Thrifting Shop</p>
          </div> 
          <p style={{ fontSize: "0.9em" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat vel quos tenetur maxime consequatur pariatur possimus laborum voluptas rerum. Dicta et quasi, sed ratione beatae natus accusantium velit earum officia.</p>
        </div>
        <div className="access-container" style={{ flex: "1", textAlign: "center" }}>
          <p>Fast Access</p>
          <label className='Footer-login-btn mt-2' style={{textAlign: "center"}} onClick={() => {navigate('/login')}}>Login</label> <br /> {/* add link soon */}
          <label className='Footer-login-btn mt-2' style={{textAlign: "center"}} onClick={() => {navigate('/sign-in')}}>Register</label> {/* add link soon */}
        </div>
        <div className="icon-container" style={{ flex: "1", textAlign: "center" }}>
          <p>Social Media</p>
          <div className="icon-wrapper d-flex justify-content-around px-5 mt-4">
            <FaFacebookF />
            <FaWhatsapp />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;