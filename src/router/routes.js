import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import BlankLayout from "../layouts/BlankLayout";

const DefaultRoute = "/home";

const Home = lazy(() => import("../views/HomeView"));

const Routes = [
    {
        path: "/",
        index: true,
        element: <Navigate replace to={DefaultRoute} />,
    },
    {
        path: "/home",
        element: <AppLayout />,
        children: [{ index: true, element: <Home /> }],
    },
    {
        path: "/error",
        element: <BlankLayout />,
        children: [{ index: true, element: <></> }],
    },
    {
        path: "*",
        element: <></>,
    },
];

export { Routes };
