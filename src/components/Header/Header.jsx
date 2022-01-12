import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import NavLeft from "./nav-left/Nav-left";
import MainNav from "./mainNav/MainNav";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { selectedItems } from "../../store/cartSlice";
function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return state.auth;
    });
    const items = useSelector((state)=>{
        return state.cart.items
    });
    return (
        <React.Fragment>
            <div className="header">
                <NavLeft />

                <div className="header__search">
                    <input className="header__searchInput" type="text"></input>
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    <div
                        className="header__option"
                        onClick={() => {
                            // state.loggedIn?{}:navigate("/signin")
                            if (state.loggedIn) {
                                dispatch(logout());
                            } else {
                                navigate("/signin");
                            }
                        }}
                    >
                        <span className="header__optionLineOne">
                            Hello,{" "}
                            {state.loggedIn
                                ? `${state.user.username}`
                                : `Sign in`}
                        </span>
                        <span className="header__optionLineTwo">
                            Account & Lists
                        </span>
                    </div>
                    <div
                        className="header__option"
                        onClick={() => {
                            dispatch(logout("yes"));
                        }}
                    >
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& orders</span>
                    </div>
                    <div
                        className="header__optionBasket"
                        onClick={() => {
                            navigate("/checkout");
                        }}
                    >
                        <div className="header__optionBasket__img">
                            <ShoppingCartIcon className="cartIcon" />
                            <span className="header__basketCount">{items.length}</span>
                        </div>
                        <div className="header__optionBasket__words">
                            <span className="header__optionLineOne"></span>
                            <span className="header__optionLineTwo">Cart</span>
                        </div>
                    </div>
                    {/* <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div> */}
                </div>
            </div>
            <MainNav />
        </React.Fragment>
    );
}

export default Header;
