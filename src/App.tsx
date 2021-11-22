import React from "react";

import "./App.scss";
import Navbar from "./UI/Navbar/Navbar";
import LoginPage from "./UI/Pages/LoginPage/LoginPage";
import RegistrationPage from "./UI/Pages/RegistrationPage/RegistrationPage";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path="reg" element={ <RegistrationPage/>}/>
                <Route path="/" element={ <LoginPage/>}/>


            </Routes>

        </div>
    );
}

export default App;
