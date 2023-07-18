// Context.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [flag, setFlag] = useState(false);

  const addItem = async (item) => {
    console.log(process.env.CRUDCRUD_API);
    console.log(item);
    try {
      await axios.post('https://crudcrud.com/api/057cb8196de94148a3bf586eacc7d141/products', { ...item });
      setFlag(!flag);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const fetchItem = async () => {
    try {
      const response = await axios.get('https://crudcrud.com/api/057cb8196de94148a3bf586eacc7d141/products');
      setItems(response.data);
      console.log(items);
     
      setFlag(!flag);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  
  const fetchCart = async () =>{
  try{
    const response = await axios.get('https://crudcrud.com/api/057cb8196de94148a3bf586eacc7d141/cart');
    console.log(response.data);
    setCart(response.data);
    console.log(cart);
  }catch(error){
    console.log(error);
  }
  }
     
   const addToCart = async (item) =>{
    console.log('called');
    try{ 
      await axios.post('https://crudcrud.com/api/057cb8196de94148a3bf586eacc7d141/cart',{ ...item })
      fetchCart();
    }catch(error){
      console.log(error);
    }
   }

  useEffect(() => {
    fetchItem();
    fetchCart();
  }, []);
 
 

  return <Context.Provider value={{ addItem, fetchItem, items, cart, addToCart, fetchCart}}>
    {children}
    </Context.Provider>;
};

export { Context, ContextProvider };
