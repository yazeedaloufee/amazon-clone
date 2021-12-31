import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {get} from '../../../store/sideNavContentSlice'
import './SideNavContent.css'
function SideNavContent() {
    const dispatch=useDispatch();
    const state = useSelector(state=>{
        
      return state.sideNavContent
    })
    useEffect(()=>{
        dispatch(get());
    },[])
    return (
        <div className='sideNavContainer'>
            {console.log( state)}
            {state&& state.map((entry,index)=>{
                return(
                    <div className='sideNaveContentHeader'>{entry.title}</div>
                )
            })}
        </div>
    )
}

export default SideNavContent
