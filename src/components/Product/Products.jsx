import React from 'react'
import CardProduct from "../Card/CardProduct"
import productData from "../../middlewares/dummyApi"
import "./Products.css"
import { Row, Col, Container } from 'react-bootstrap'

const Products = () => {
    return (
        <Container fluid="md">
            <Row className="Products-container">
                {console.log(productData.id)}
                {productData.map(productData => {
                    return (
                        <Col className='pb-3'>
                            <CardProduct
                                key={productData.id}
                                image={productData.image}
                                name={productData.name}
                                price={productData.price}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Products