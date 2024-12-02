import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./configs/Layout";

const Login = lazy(() => import("./views/auth/Login"));
const Dashboard = lazy(() => import("./views/pages/Dashboard/index.jsx"));
const About = lazy(() => import("./views/pages/About/index.jsx"));
const SocketChat = lazy(() => import("./views/pages/SocketChat/SocketChat.jsx"));
const Tabel = lazy(() => import("./views/pages/Table/index.jsx"));
const Map = lazy(() => import("./components/formComponent/MapFrom.jsx"));
const CoordinatesMap = lazy(() => import("./components/formComponent/CoordinatesMapFrom.jsx"));

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
                                    <Route path="*" element={<Navigate to="/login" />} />
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/tabel" element={<Tabel />} />
                                    <Route path="/map" element={<Map />} />
                                    <Route path="/coordinatesMap" element={<CoordinatesMap />} />


                                    <Route path="/chate" element={<SocketChat />} />
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
