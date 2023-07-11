import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style/base.sass"
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./router/router.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    </React.StrictMode>
)
