import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './global/css/global.scss'
import 'react-felix-ui/dist/cjs/index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, VideoProvider, HistoryProvider, WatchLaterProvider, LikesProvider, PlaylistProvider } from "@providers";
import { makeServer } from "./server";
import { ToastProvider } from "react-felix-ui";

// Call make Server
makeServer();
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ToastProvider className="toast-container">
                <VideoProvider>
                    <WatchLaterProvider>
                        <HistoryProvider>
                            <LikesProvider>
                                <PlaylistProvider>
                                    <AuthProvider>
                                        <App />
                                    </AuthProvider>
                                </PlaylistProvider>
                            </LikesProvider>
                        </HistoryProvider>
                    </WatchLaterProvider>
                </VideoProvider>
            </ToastProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);