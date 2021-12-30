import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import NavLeft from "./nav-left/Nav-left";
import MainNav from "./mainNav/MainNav";

function Header() {
    return (
        <React.Fragment>

        <div className="header">
            <NavLeft/>
        
            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello, Sign in
                    </span>
                    <span className="header__optionLineTwo">
                        Account & Lists
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& orders</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingCartIcon />
                    <span className="header__optionLIneTwo header__basketCount">
                        0
                    </span>
                </div>
                {/* <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div> */}
            </div>
        </div>
        <MainNav/>
                </React.Fragment>
    );
}

export default Header;
