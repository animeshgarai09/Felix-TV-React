import { Routes, Route } from "react-router-dom";
import {
    Home,
    Error404,
    Explore,
    LikedVideos,
    Playlists,
    WatchLater,
    History,
    Authentication,
    Watch,

} from './pages'
import { Layout1, Layout2, RequireAuth, RestrictAuth } from "@components"

function App() {
    return (
        <Routes>

            <Route element={<Layout1 />}>
                <Route path="/explore" element={<Explore />}></Route>
                <Route path="/watch/:id" element={<Watch />}></Route>
                <Route element={<RequireAuth />}>
                    <Route path="/liked-videos" element={<LikedVideos />}></Route>
                    <Route path="/playlists" element={<Playlists />}></Route>
                    <Route path="/watch-later" element={<WatchLater />}></Route>
                    <Route path="/history" element={<History />}></Route>
                </Route>
            </Route>
            <Route element={<Layout2 />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Error404 />}></Route>
                <Route element={<RestrictAuth />}>
                    <Route path="/signin" element={<Authentication />}></Route>
                    <Route path="/signup" element={<Authentication />}></Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
