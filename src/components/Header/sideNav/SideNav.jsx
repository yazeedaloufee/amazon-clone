import React from "react";
import "./SideNav.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNavContent";
import { useSelector } from "react-redux";
function SideNav(props) {
  const state = useSelector((state) => {
    return state.auth;
  });

  return (
    <div
      className="sideNav"
      style={
        props.state === "entering"
          ? { animation: "moveSideBar .3s forwards" }
          : props.state === "entered"
          ? { transform: "translateX(0px)" }
          : { animation: "moveSideBar .3s reverse forwards" }
      }
    >
      <div className="sideNavHeader">
        <i className="fas fa-user-circle"></i>
        <AccountCircleIcon className="circleIcon" />Hello,{" "} 
        {state.loggedIn ? `${state.user.username}` : `Sign in`}
      </div>
      <SideNavContent />
    </div>
  );
}

export default SideNav;
