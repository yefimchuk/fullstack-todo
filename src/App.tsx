import React, { useEffect } from "react";
import "./App.scss";
import Navbar from "./UI/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { login } from "./BLL/loginUser/loginUser.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "./BLL/loginUser/loginUser.selector";
import { useRoutes } from "./routes/routes";

function App() {
    const dispatch = useDispatch();
    const isLogin = useSelector(selectToken);
    const navigate = useNavigate();
    const routes = useRoutes();
    useEffect(() => {
        try {
            const data: { token: string, userId: string } = JSON.parse(localStorage.getItem("userData") || "");
            if (data && data.token) {
                const {token, userId} = data;
                dispatch(login({token, userId}));
            }


        } catch (error) {

        } finally {
            isLogin ? navigate('/', {replace: true}) : navigate('login', {replace: true});
        }


    }, [isLogin]);
    return (
        <div className="app">
            <Navbar/>
            {routes}

        </div>
    );
}

export default App;
