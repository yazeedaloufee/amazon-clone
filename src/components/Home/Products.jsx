import React from 'react'
import './Products.css'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {get} from '../../store/productsSlice'
import OneProduct from './OneProduct';


function Products() {
    const dispatch = useDispatch(); 
    const state = useSelector(state=>{
        return state.products;
    })
    useEffect(()=>{
        dispatch(get());
    },[]) 
    return (
        <div className='products'>
            {state&&state.map(({id,title,price,description,category,image},idx)=>
            {return <OneProduct id={id} title={title} price={price} description={description} category={category} image={image}>
                
            {console.log( title)}
            </OneProduct>})}            
        </div>
    )
}

export default Products;