import { Button } from "react-felix-ui"
import { Link } from "react-router-dom"
import styles from "./home.module.scss"
import { Helmet } from "react-helmet"

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home| Felix TV</title>
            </Helmet>

            <div className={styles.container}>
                <h1>Let's make earth greener</h1>
                <Link to="/explore"><Button >Explore</Button></Link>
            </div>
        </>
    )
}

export default Home