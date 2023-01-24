import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../Context/Context'
import Rating from './Rating'

const SingleProduct = ({ prod }) => {
const {
    state: { cart },
    dispatch,
} = CartState()

  return  <div className='products'>
    <Card className='cardProduct'>
        <Card.Img variant = 'top' src={prod.image} alt={prod.name} />
        <Card.Body>
            <Card.Title className='textColor'>{prod.name}</Card.Title>
            <Card.Subtitle className='textColor' style={{paddingBottom: 10}} >
                <span className='textColor'>$ {prod.price.split('.')[0]}</span>
                {prod.fastDelivery ? (
                    <div className='textColor'>Fast Delivery</div>
                ) : (
                    <div className='textColor'> 3 days delivery </div>
                )}
                <Rating className='starOutline' rating={prod.ratings} />
            </Card.Subtitle>
            {
                cart.some((p) => p.id === prod.id) ? (
                    <Button
                    onClick={() => {
                        dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: prod,
                        })
                    }} variant='danger'>Remove from cart</Button>
                ) : ( 
                    <Button onClick={() => {
                        dispatch({
                            type: 'ADD_TO_CART',
                            payload: prod,
                        })
                    }} disabled={!prod.inStock}>
            {!prod.inStock ? 'Out of Stock' : 'Add to cart'}
            </Button>)
            }
           
        </Card.Body>
    </Card>
  </div>
  
}

export default SingleProduct