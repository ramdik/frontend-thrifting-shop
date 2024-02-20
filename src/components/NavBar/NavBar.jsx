import React from 'react'
import { Form, Container } from 'react-bootstrap'
import { FaCartPlus, FaSearch  } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import './NavBar.css'

const NavBar = () => {
    return (
        <Container fluid className='NavBar-container'>
            <div className="wrapper d-flex flex-row align-items-center">
                <div className="label-container">
                    <label className='NavBar-shop-name flex-fill fs-3'>Thrifting Shop</label>
                </div>
                <Form className="Form d-flex flex-fill align-items-center" style={{ width: "40%" }}>
                    <FaSearch 
                        className='icon px-1'
                        style={{ fontSize: '2em' }}
                    />
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        id ="search"
                    />
                </Form>
                <FaCartPlus
                    className='icon px-1 mx-2'
                    style={{ fontSize: '2em', color: "white" }}
                />
                <RxAvatar
                    className='icon px-1 mx-2'
                    style={{ fontSize: '3em', color: "white" }}
                />
            </div>
        </Container>
    )
}

export default NavBar