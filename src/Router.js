import React, { lazy, Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = lazy(() => import("./views/auth/Login"))


export default class AppRouter extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="" element={<Navigate to="/login" />} />
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

