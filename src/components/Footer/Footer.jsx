import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="text-light py-3">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h5 className="mb-0 fs-3">Thrifting Shop</h5>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-md-end mt-3 mt-md-0">
            <FaFacebookF />
            <FaWhatsapp />
            <FaTwitter />
            <FaInstagram />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;