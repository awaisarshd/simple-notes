import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import "../assets/css/app.css";

import Header from "../components/navs/Header";
import Sidebar from "../components/navs/Sidebar";

const AppLayout = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        return () => setIsMounted(false);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Header appName="Simple Notes" homePage="/notes" logoutLink="" />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default AppLayout;
