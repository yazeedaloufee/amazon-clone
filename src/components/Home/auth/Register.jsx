import React from "react";
import { useState } from "react";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import ControlledOpenSelect from "../../Checkout/Quentity";
function Register() {
  const navigate = useNavigate();
  let [password, setPassword] = useState("");
  let [password2, setPassword2] = useState("");
  let [passwordFlag, setPasswordFlag] = useState(true);
  let [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const authstate = useSelector((state) => {
    return state.auth;
  });

  // let [auth,setauth]=useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(passwordFlag)
    if (password === password2) {
      setPasswordFlag(true);
      dispatch(signup(username, password));
      if (authstate.user !== {}) {
        navigate("/");
      }
    } else {
      setPasswordFlag(false);
    }
  };
  const passwordHandleChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    console.log(passwordFlag)
    if (password === password2) {
      setPasswordFlag(true);
    console.log(passwordFlag)
    }
  };
  const password2HandleChange = (e) => {
    e.preventDefault();
    setPassword2(e.target.value);
    if (password === password2) {
      setPasswordFlag(true);
    }
  };
  const usernameHandleChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  return (
    <div>
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
          className="h-8 shadow-black drop-shadow-md  border-1 border-gray-400 rounded-sm w-full p-2"
          type="text"
          name="username"
          placeholder="Username"
          onChange={usernameHandleChange}
        />
        <input
          className="h-8 shadow-black drop-shadow-md  border-1 border-gray-400 rounded-sm w-full my-3 p-2"
          type="text"
          name="password"
          placeholder="Password"
          onChange={passwordHandleChange}
        />
        <input
          className="h-8 shadow-black drop-shadow-md  border-1 border-gray-400 rounded-sm w-full my-3 p-2"
          type="text"
          name="password2"
          placeholder="Password"
          onChange={password2HandleChange}
        />
        {!passwordFlag && <p className="font-red">passwords must match</p>}
        <button
          className="signin-button h-8 border-1 border-gray-500 rounded-sm mt-4 w-full "
          onClick={handleSubmit}
          name="login"
        >
          Register
        </button>
        {/* <button onClick={handleSubmit} name ='signup'>Sign Up</button> */}
        {/* <button onClick={handleSubmit} name = 'signedIn'>Bearer</button> */}
      </form>
    </div>
  );
}

export default Register;
