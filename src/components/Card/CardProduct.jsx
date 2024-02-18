import React from 'react'
import Card from 'react-bootstrap/Card';
import './Card.css'

function CardProduct(props) {
    return (
        <Card className='Card-container' style={{width: '14rem'}}>
            <Card.Img src={props.image} className='Card-image'/>
            <Card.Title className='Card-title'>{props.name}</Card.Title>
            <Card.Text className='Card-price'>Rp. {props.price}</Card.Text>
        </Card>
    )
}

export default CardProduct