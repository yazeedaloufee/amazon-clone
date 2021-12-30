import React from 'react'
import './SideNav.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function SideNav(props) {
    return (
    
        <div className='sideNav' style={props.state === "entering"? {animation: "moveSideBar .3s forwards"}:props.state==="entered"?
        {transform:"translateX(0px)"}: {animation:"moveSideBar .3s reverse forwards"}}>
            {console.log(props.state)}

            <div className="sideNavHeader">
                <i className="fas fa-user-circle"></i>
                <AccountCircleIcon className='circleIcon'/>Hello, Sign In
            </div>
        </div>
    )
}

export default SideNav;
 