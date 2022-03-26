import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    Home,
    Error404,
    Explore,
    LikedVideos,
    Playlists,
    WatchLater,
    History,
    Authentication
} from './pages'
import { Layout1, Layout2 } from "./components"

function App() {
    return (
        <Router>
            <Routes>

                <Route element={<Layout1 />}>
                    <Route path="/explore" element={<Explore />}></Route>
                    <Route path="/liked-videos" element={<LikedVideos />}></Route>
                    <Route path="/playlists" element={<Playlists />}></Route>
                    <Route path="/watch-later" element={<WatchLater />}></Route>
                    <Route path="/history" element={<History />}></Route>
                </Route>
                <Route element={<Layout2 />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/signin" element={<Authentication />}></Route>
                    <Route path="/signup" element={<Authentication />}></Route>
                    <Route path="*" element={<Error404 />}></Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
