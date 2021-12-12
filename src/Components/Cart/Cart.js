import React, {useContext} from 'react';
import SaveLater from '../SaveLater/SaveLater';
import {ValuesContext} from '../../App';
import {BiRupee} from 'react-icons/bi';
import {AiOutlinePlus, AiOutlineMinus, AiFillDelete} from 'react-icons/ai';
import './Cart.css';

const Cart = () => {

    const {itemsInCart, cartIncrease, cartDecrease, deleteItemFromCart, saveForLater} = useContext(ValuesContext);

    const totalItemsInCart = itemsInCart.reduce((total, product)=>{
        return total += product.cartTotal;
    }, 0)

    const totalPriceWithoutDiscount = itemsInCart.reduce((total, product)=>{
        let calc = 0;
        calc = product.cartTotal * product.oldPrice;
        return total += calc;
    }, 0)

    const discountAmount = itemsInCart.reduce((total, product)=>{
        let calc = 0;
        calc = product.cartTotal * product.discountAmount;
        return total += calc;
    }, 0)

    const totalPriceWithDiscount = itemsInCart.reduce((total, product)=>{
        let calc = 0;
        calc = product.cartTotal * product.newPrice;
        return total += calc;
    }, 0)

    return (
        <>
        {(itemsInCart.length) ?
        <div className="cartPageDescription">
        <p>Total Items in cart : {totalItemsInCart}</p>
        <p className="cartSubDescription">Total Price without discount : <BiRupee/>{totalPriceWithoutDiscount}</p>
        <p className="cartSubDescription">You saved (Discount) : <BiRupee/>{discountAmount}</p>
        <p className="cartSubDescription">Final amount to be paid: <BiRupee/>{totalPriceWithDiscount}</p>
        </div>
        :
        <div className="cartPagePlaceHolder">
        <p>There are no items in cart</p>
        </div>
        }

        <div className="productCards">
        {itemsInCart.map((product)=>{
            return (
                <div className="singleProduct" key={product.id}>
                <img src={product.imageURl} alt="" className="productImage"/>
                <h1 className="productTitle">{product.productTitle}</h1>
                {/* <p className="productDescription">{product.productDescription}</p> */}

                {/* Price Section */}
                <div className="priceSection">
                <p className="newPrice"><BiRupee/>{product.newPrice}</p>
                <p className="oldPrice"><BiRupee/>{product.oldPrice}</p>
                <p className="discount">{product.discount}</p>
                </div>

                {/* Size section */}
                {/* <div className="sizeSection">
                <p className="productSizeText">Size</p>
                <p className="productSize">{product.size}</p>
                </div> */}

                <div className="cartTotalModifier">
                <AiOutlineMinus className="operator" onClick={()=>{cartDecrease(product.id)}}/>
                {product.cartTotal}
                <AiOutlinePlus className="operator" onClick={()=>{cartIncrease(product.id)}}/>
                <AiFillDelete className="deleteOperator" onClick={()=>{deleteItemFromCart(product.id)}}/>
                </div>

                <button className="saveForLaterLink" onClick={()=>{saveForLater(product.id)}}>Save for later</button>

                </div>
            )
        })}
        </div>
        
       <SaveLater />
        
        </>
    )
}

export default Cart
