import React from "react";
import { headerItems } from "../../../dataSample";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useDispatch, useSelector } from "react-redux";
import { open, close } from "../../../store/sideNavSlice";
import "./MainNav.css";
import SideNav from "../sideNav/SideNav";
import { Transition } from "react-transition-group";
import CloseIcon from "@mui/icons-material/Close";
function MainNav() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.sideNav;
  });
  return (
    <div className="MainNav">
      <div className=" MainNav__sideMenu " onClick={() => dispatch(open())}>
        <MenuOutlinedIcon className="menuIcon" />
        <p className="All">All</p>
      </div>
      <div className="MainNav__content">
        {headerItems.map((item, idx) => (
          <p className="MainNav__item" key={idx}>
            {item}
          </p>
        ))}
      </div>
      <div className="allDeals">
        <p className="MainNav__item">Shop All Deals</p>
      </div>
      <Transition in={state} timeout={300} mountOnEnter unmountOnExit>
        {(state) => {
          return (
            <>
              <SideNav state={state} />
              <div
                className="overlay"
                style={
                  state === "entering"
                    ? { animation: "show .3s forwards" }
                    : state === "entered"
                    ? { opacity: "1" }
                    : {
                        animation: "show .3s reverse forwards",
                      }
                }
                onClick={() => dispatch(close())}
              ></div>
              <div
                className="closeButton"
                style={
                  state === "entering"
                    ? { animation: "show .3s forwards" }
                    : state === "entered"
                    ? { opacity: "1" }
                    : {
                        animation: "show .3s reverse forwards",
                      }
                }
                onClick={() => dispatch(close())}
              >
                <CloseIcon className="closeIcon" />
              </div>
            </>
          );
        }}
      </Transition>
    </div>
  );
}

export default MainNav;
