import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./Nav-left.css";
function NavLeft() {
    return (
        <div className="header__nav-left">
            <div className="nav-logo">
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
