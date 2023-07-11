import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./router/router.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    </React.StrictMode>
    ,
)
