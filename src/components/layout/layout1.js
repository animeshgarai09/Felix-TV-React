import styles from "./layout.module.scss"
import Header from "../header/header"
import SideNav from "../side-nav/side-nav"
import { Outlet } from "react-router-dom"
const Layout1 = () => {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <SideNav />
                <div className={styles.main}>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default Layout1