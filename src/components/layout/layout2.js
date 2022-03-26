import { Outlet } from "react-router-dom"
import Header from "../header/header"
const Layout2 = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout2