import React, {useContext} from 'react';
import {ValuesContext} from '../../App';
import {BiRupee} from 'react-icons/bi';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import'./Home.css';

const Home = () => {

    const {products, addToCart, cartIncrease, cartDecrease} = useContext(ValuesContext);

    return (
         <div className="productCards">
        {products.map((product)=>{
            return (
                <div className="singleProduct" key={product.id}>
                <img src={product.imageURl} alt="" className="productImage"/>
                <h1 className="productTitle">{product.productTitle}</h1>
                <p className="productDescription">{product.productDescription}</p>

                {/* Price Section */}
                <div className="priceSection">
                <p className="newPrice"><BiRupee/>{product.newPrice}</p>
                <p className="oldPrice"><BiRupee/>{product.oldPrice}</p>
                <p className="discount">{product.discount}</p>
                </div>

                {/* Size section */}
                <div className="sizeSection">
                <p className="productSizeText">Size</p>
                <p className="productSize">{product.size}</p>
                </div>

                {(!product.cartTotal) ? 
                <div className="cartBtnDiv" onClick={()=>{addToCart(product.id)}}>
                <button className="cartBtn">Add to Cart</button>
                </div>  
                :
                (<div className="cartTotalModifier">
                <AiOutlineMinus className="operator" onClick={()=>{cartDecrease(product.id)}}/>
                {product.cartTotal}
                <AiOutlinePlus className="operator" onClick={()=>{cartIncrease(product.id)}}/>
                </div>)
                }

                </div>
            )
        })}
        </div>
    )
}

export default Home
