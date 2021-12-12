import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useContext, useState} from 'react';
import {productsData} from "./data";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';

export const ValuesContext = React.createContext();

function App() {

  const [products, setProducts] = useState(productsData.productDetails);

  const itemsInCart = products.filter((product)=>{
    return product.cartTotal > 0;
  })

  const addToCart = (id) =>{
        const modification = products.find((product)=>{
          return product.id === id;
        })
        ++modification.cartTotal;
        setProducts([...new Set([...products, modification])])
    }

    const cartIncrease = (id) =>{
      const modification = products.find((product)=>{
          return product.id === id;
        })
        ++modification.cartTotal;
        setProducts([...new Set([...products, modification])])
    }

    const cartDecrease = (id) =>{
      const modification = products.find((product)=>{
          return product.id === id;
        })
        --modification.cartTotal;
        setProducts([...new Set([...products, modification])])
    }

    const deleteItemFromCart = (id) =>{
      const modification = products.find((product)=>{
          return product.id === id;
        })
        modification.cartTotal = 0;
        setProducts([...new Set([...products, modification])])
    }

    const saveForLater = (id) =>{
      const modification = products.find((product)=>{
          return product.id === id;
        })
        modification.cartTotal = 0;
        modification.savedForLater = "true";
        setProducts([...new Set([...products, modification])])
    }

    const addToCartFromSaveLaterSection = (id) =>{
      const modification = products.find((product)=>{
          return product.id === id;
        })
        ++modification.cartTotal;
        modification.savedForLater = "false";
        setProducts([...new Set([...products, modification])])
    }

  return (
    <Router>
    <ValuesContext.Provider value={{products, addToCart, cartIncrease, cartDecrease, itemsInCart, deleteItemFromCart, saveForLater, addToCartFromSaveLaterSection}}>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/cart" element={<Cart />}/>
      </Routes>
    </ValuesContext.Provider>
    </Router>
  );
}

export default App;
