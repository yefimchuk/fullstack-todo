import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegistrationPage from "../UI/Pages/RegistrationPage/RegistrationPage";
import LoginPage from "../UI/Pages/LoginPage/LoginPage";
import MainPage from "../UI/Pages/MainPage/MainPage";


export const useRoutes = () => {

return <Routes>
        <Route path="reg" element={<RegistrationPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="/" element={<MainPage/>}/>
    </Routes>
};