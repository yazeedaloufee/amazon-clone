import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {useNavigate} from 'react-router-dom';
import "./Nav-left.css";
function NavLeft() {
    const navigate = useNavigate();
    return (
        <div className="header__nav-left">
            <div className="nav-logo" onClick={()=>{
                navigate("/")
            }}>
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </div>

            <div className="header__location">
                <LocationOnOutlinedIcon className="header__locationIcon" />
                <div className="header__option">
                    <span className="header__optionLineOne">Deliver to</span>
                    <span className="header__optionLineTwo">Jordan</span>
                </div>
            </div>
        </div>
    );
}

export default NavLeft;
