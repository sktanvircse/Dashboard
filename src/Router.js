import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./configs/Layout";

const Login = lazy(() => import("./views/auth/Login"));
const Dashboard = lazy(() => import("./views/pages/Dashboard/index.jsx"));
const About = lazy(() => import("./views/pages/About/index.jsx"));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route 
                        path="/*" 
                        element={
                            <Layout>
                                <Routes>
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="*" element={<Navigate to="/dashboard" />} />
                                </Routes>
                            </Layout>
                        } 
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;
