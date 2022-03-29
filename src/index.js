import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './global/css/global.scss'
import 'react-felix-ui/dist/cjs/index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "@providers/auth-provider";
import { VideoProvider } from "@providers/video-provider";
import { makeServer } from "./server";
import { ToastProvider } from "react-felix-ui";

// Call make Server
makeServer();
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ToastProvider className="toast-container">
                <VideoProvider>
                    <AuthProvider>
                        <App />
                    </AuthProvider>
                </VideoProvider>
            </ToastProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);