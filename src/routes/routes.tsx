import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegistrationPage from "../UI/pages/RegistrationPage/RegistrationPage";
import LoginPage from "../UI/pages/LoginPage/LoginPage";
import MainPage from "../UI/pages/MainPage/MainPage";


export const useRoutes = () => {

return <Routes>
        <Route path="reg" element={<RegistrationPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="/" element={<MainPage/>}/>
    </Routes>
};