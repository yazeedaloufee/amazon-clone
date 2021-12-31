import React from 'react'
import './SideNav.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';
function SideNav(props) {
    return (
    
        <div className='sideNav' style={props.state === "entering"? {animation: "moveSideBar .3s forwards"}:props.state==="entered"?
        {transform:"translateX(0px)"}: {animation:"moveSideBar .3s reverse forwards"}}>

            <div className="sideNavHeader">
                <i className="fas fa-user-circle"></i>
                <AccountCircleIcon className='circleIcon'/>Hello, Sign In
            </div>
            <SideNavContent/>
        </div>
    )
}

export default SideNav;
 