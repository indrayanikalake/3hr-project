import React from 'react'
import { Form, ContextProvider, Products, Cart} from './component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <ContextProvider>
      <Routes>
       <Route exact path='/' element={<Form/>}/>
       <Route exact path='/products' element={<Products/>}/>
       <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </ContextProvider>
    </Router>
  )
}

export default App;
