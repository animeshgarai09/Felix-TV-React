import { Button } from "react-felix-ui"
import { Link } from "react-router-dom"
import styles from "./home.module.scss"
const Home = () => {

    return (
        <div className={styles.container}>
            <h1>Home Page</h1>
            <Link to="/explore"><Button >Explore</Button></Link>
        </div>
    )
}

export default Home