import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Error404 } from './pages'
import { Header, Footer } from "./components"

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
