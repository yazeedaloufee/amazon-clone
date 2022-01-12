import React from "react";
import "./Checkout.css";
import Header from "../Header/Header";
import {useSelector} from 'react-redux';
import CheckoutProduct from "../Home/CheckoutProduct";
import { selectTotal } from "../../store/cartSlice";
function Checkout() {
    const items = useSelector(state => state.cart.items)
    const total = useSelector(selectTotal)
    const loggedIn = useSelector(state=>state.auth.loggedIn)
    return (
    
        <div>
            <Header />
            <main className="checkout__main flex p-3  border-black pt-4">
                {/* left side  */}
                <div className="checkout__leftSide w-fit md:max-w-6xl w-full bg-white p-3 ">
                    <h1 className="">{items.length === 0?'your Amazon Cart is empty.':'Shopping Cart'}</h1>
                    <div ><p className="text-right m-0 border-b border-gray-300">Price</p></div>
                    {items.map((item,idx)=>
                        <CheckoutProduct
                        className=""
                        key={idx}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        rating={item.rating} 
                        hasPrime={item.hasPrime}
                        quantity={item.quantity}
                        totalPrice = {item.totalPrice}/>
                        
                    )} 
                <div className="flex justify-end order-4">
                        <h2 className="whitespace-nowrap text-xl text-semibold">Subtotal ({items.length}{items.length===1?' item':' items'}):</h2>
                        <span className="font-bold text-xl">${total}</span>
                </div>
                </div>
                {/* right side */}
                {items.length>0 && (<div>

                <div className="flex flex-col bg-white p-5 ml-5 shadow-md ">
                    {items.length >0 && (
                        <>
                        <div className="flex">
                        <h2 className="whitespace-nowrap text-xl text-semibold">Subtotal ({items.length}{items.length===1?' item':' items'}):</h2>
                        <span className="font-bold text-xl">${total}</span>
                        </div>
                        <button className={`amazonButton w-full cursor leading-none text-sm`}>
                            {!loggedIn?'Sign in to checkout':'Prodeed to checkout'}
                        </button>
                        </>
                    )}
                </div>
                    </div>)}
            </main>
        </div>
    );
}

export default Checkout;
