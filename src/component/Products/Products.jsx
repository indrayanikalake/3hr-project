import React,{ useContext } from 'react';
import { Context } from '../Context/Context';
import { List, ListItem, ListItemText,Button } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const Products = () => {
    const { items, addToCart, fetchCart } = useContext(Context);
    const [small, setSmall] = useState(100);
    const [medium,setMedium] = useState(500);
    const [large, setLarge] = useState(400);

    const submitCart = (e, item, quantity) =>{
        console.log(item);
        e.preventDefault();
        addToCart(item);
        fetchCart();
   
        if(quantity ==='small') setSmall(small-1);
        else if(quantity==='medium') setMedium(medium-1);
        else if(quantity==='large') setLarge(large-1);
    }
  return (
   <List>
   {items.map((item) =>(
    <ListItem key={item.id}> 
        <ListItemText primary={item.title} secondary={item.description} />
        <ListItemText primary={`${item.price}`} />
        {item.quantity === 'small' &&(
            <Button variant='outlined' >Small:{small}</Button>
        )}
        {item.quantity === 'medium' &&(
            <Button variant='outlined'>Medium:{medium}</Button>
        )}
        {item.quantity === 'large' &&(
            <Button variant='outlined'>large:{large}</Button>
        )}
        <Button  variant='contained' color='primary' onClick={(e) =>{submitCart(e, item, item.quantity)}}>Buy</Button>
    </ListItem>
   ))}
   </List>
   
  )
}

export default Products;
