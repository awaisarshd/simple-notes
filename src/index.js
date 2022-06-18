import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import { Spinner } from "reactstrap";
import { Slide, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const LazyApp = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Suspense fallback={<Spinner />}>
            <LazyApp />
            <ToastContainer transition={Slide} />
        </Suspense>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
