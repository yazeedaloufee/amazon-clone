import React, { useEffect } from 'react'
import './OneProduct.css';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

function OneProduct({id,title,price,description,category,image}) {
    const dispatch = useDispatch();
    const quantity = 1;
    const totalPrice =price;
    const addItemToBasket=()=>{
        const product = {id,title,price,description,category,image,rating,hasPrime,quantity,totalPrice}
        dispatch(addToCart(product));
    }
  
    const [rating]=useState(
        Math.floor(Math.random()*50+1)/10
    )
    const [hasPrime]=useState(Math.random()>0.3)
    return (
        <div className='oneProduct'>
            <p className='categoryClass'>{category}</p>            
            <img src={`${image}`} className='oneProductImg'></img>
            <h4 className='h4Class'>{title}</h4>
            <div>{
            Array(5).fill().map((_,idx)=>{
                if(rating-idx>=.75){return <StarIcon key = {idx}className='starIcons'/>}
                else if(rating-idx>.3&& rating-idx<.75){return <StarHalfIcon key = {idx} className='starIcons'/>}
                else {return <StarOutlineIcon key = {idx} className='starIcons'/>}
            })}
            </div>
            <p className='descriptionClass'>{description}</p>
            <p>${price}</p>
            {hasPrime && (
                <div className='prime'>
                    <img src="https://links.papareact.com/fdw"></img>
                    <p>FREE Next-day Delivery</p>
                </div>
            )}
            <div className='amazonButton' onClick={()=>addItemToBasket()}><p>Add to Basket</p></div>
        </div>
    )
}

export default OneProduct;
