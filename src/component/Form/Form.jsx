import React,{ useState, useContext, useEffect } from 'react'
import { Badge, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Context } from '../Context/Context';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';


const Form = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const { addItem, fetchItem, cart }  = useContext(Context);
  const [submit, setSubmit] = useState(false);

  
  useEffect(() =>{ 
    console.log('clicked');
    
         const item= {
          name:name, 
          price:price, 
          description:description, 
          quantity:quantity
        };
       console.log(item);
        addItem(item);
         fetchItem();

         setName('');
         setDescription('');
         setPrice('');
         setQuantity('');
      },[submit]);
  return (
    <>
    <IconButton component={Link} to='/cart' aria-label='showCart' color='inherit'>
      <Badge badgeContent={cart.length} color='secondary'>
        <ShoppingCart />
      </Badge>
    </IconButton>
    <form  style={{textAlign:'center', alignItems:'center',margin:'5rem 22rem',border:'1px solid gray', width:'40%'}} 
     onSubmit={(e) =>{
      
       e.preventDefault();
       setSubmit(!submit);
       }}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
      <TextField InputLabelProps={{ shrink: true }} label='Name' value={name} onChange={(e) =>setName(e.target.value)} required/>
      </Grid>
      <Grid item xs={12}>
      <TextField InputLabelProps={{ shrink: true }} label='Description' value={description} onChange={(e) =>setDescription(e.target.value)} required/>
      </Grid>
      <Grid item xs={12}>
      <TextField InputLabelProps={{ shrink: true }}  label='Price' value={price} onChange={(e) =>setPrice(e.target.value)} required/>
      </Grid>
      <Grid item xs={12}>
      <FormControl>
        <InputLabel>Quantity</InputLabel>
        <Select value={quantity} onChange={(e) =>setQuantity(e.target.value)} required>
        <MenuItem value='small'>small</MenuItem>
        <MenuItem value='medium'>medium</MenuItem>
        <MenuItem value='large'>large</MenuItem>
        </Select>
        
      </FormControl>
      </Grid>
      <Grid item xs={12}>
      <Button component={Link} to='/products' type='submit' variant='contained' color='primary'
      >Add</Button>
      </Grid>
      </Grid>
    </form>
    </>
  )
}

export default Form;
