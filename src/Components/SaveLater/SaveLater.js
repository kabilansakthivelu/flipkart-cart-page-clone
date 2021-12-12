import React, {useContext} from 'react';
import {ValuesContext} from '../../App';
import {BiRupee} from 'react-icons/bi';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import './SaveLater.css';

const SaveLater = () => {

    const {products, addToCart, addToCartFromSaveLaterSection, removeFromSavedList} = useContext(ValuesContext);

    const savedForLaterItems = products.filter((product)=>{
        return product.savedForLater === "true";
    })

    return (
        <>
        {savedForLaterItems.length 
        ?
        <div>
        <h1 className="saveForLater">Saved for later:</h1>
        <div className="productCards">
        {savedForLaterItems.map((product)=>{
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
        
                <div className="cartBtnDiv" onClick={()=>{addToCartFromSaveLaterSection(product.id)}}>
                <button className="cartBtn">Add to Cart</button>
                </div> 

                <button className="saveForLaterLink" onClick={()=>{removeFromSavedList(product.id)}}>Remove from saved list</button>

                </div>
            )
        })}
        </div>
        </div>
        :
        <div className="saveForLaterSection">
        <h1 className="saveForLater">Saved for later:</h1>
        <p>There are no items saved for later option</p>
        </div>}
        
        </>
    )
}

export default SaveLater
