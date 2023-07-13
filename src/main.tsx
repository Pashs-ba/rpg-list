import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style/base.sass"
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./router/router.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import store from "./store/store.ts";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
