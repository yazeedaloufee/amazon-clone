import React from "react";
import { useState } from "react";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import { signin, signup, signedIn } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
function Auth() {
  const navigate = useNavigate();
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const authstate = useSelector((state) => {
    return state.auth;
  });

  // let [auth,setauth]=useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.name === "login") {
      dispatch(signin(username, password));
    }
    if (event.target.name === "signup") {
      dispatch(signup(username, password));
    }
    if (event.target.name === "signedIn") {
      dispatch(signedIn(authstate.token));
    }
    if (authstate.user !== {}) {
      navigate("/");
    }
  };
  const passwordHandleChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const usernameHandleChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  return (
    <div >
      <div className="flex justify-center">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="auth__image cursor-pointer"
          src="https://brandlogos.net/wp-content/uploads/2016/10/amazon-logo-preview.png"
          alt=""
        />
      </div>
      <form
        className="  rounded border-gray-300 border-1 w-80 mx-auto  p-4"
        action=""
      >
        <h2>Sign-In</h2>
        <h4>Username</h4>
        <input
          className="h-8 shadow-black drop-shadow-md  border-1 border-gray-400 rounded-sm w-full"
          type="text"
          name="username"
          placeholder="Username"
          onChange={usernameHandleChange}
        />
        <input
          className="h-8 shadow-black drop-shadow-md  border-1 border-gray-400 rounded-sm w-full my-3"
          type="text"
          name="password"
          placeholder="Password"
          onChange={passwordHandleChange}
        />
        <button
          className="signin-button h-8 border-1 border-gray-500 rounded-sm mt-4 w-full "
          onClick={handleSubmit}
          name="login"
        >
          Sign-in
        </button>
        {/* <button onClick={handleSubmit} name ='signup'>Sign Up</button> */}
        {/* <button onClick={handleSubmit} name = 'signedIn'>Bearer</button> */}
      </form>
      
      <div className=" flex justify-content flex-col justify-self-center">
        <div className="m-auto w-80 flex justify-center text-center border-b border-gray-300 ">
          <p className=" mt-5 text-gray-500 text-xs -mb-3 max-w-fit bg-white p-1">
            {" "}
            New to Amazon?
          </p>
        </div>
        <button onClick={() => {
            navigate("/register");
          }}
          className="m-auto w-80 border-1 border-gray-400 rounded-sm mt-4 w-full bg-gradient-to-b from-gray-100 to-gray-200 text-xs h-8 font-semibold
               hover:from-gray-200 hover:to-gray-300"
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Auth;
