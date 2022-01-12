import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Auth from "./components/Home/auth/auth";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Register from "./components/Home/auth/Register";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<div><Header></Header><Home></Home></div>}>
                                 {/* <Route path="header" element={<Header />}></Route> */}
                    {/* <Route element={<Home />} /> */}
                </Route>
                <Route path="/signin" element={<Auth/>}>
                    

                </Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </div>
    );
}

export default App;
