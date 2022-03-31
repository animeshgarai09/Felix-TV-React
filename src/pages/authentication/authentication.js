import { useEffect, useState, useRef } from "react"
import styles from "./authentication.module.scss"
import { useLocation } from 'react-router-dom';
import Signin from "./sub-components/signin";
import Signup from "./sub-components/signup";

const Authentication = () => {
    const { pathname } = useLocation()
    const [slider, setSlider] = useState(false);
    const signUpRef = useRef(null)
    const signInRef = useRef(null)

    useEffect(() => {
        if (pathname === "/signup") {
            setSlider(true)
        } else {
            setSlider(false)
        }
    }, [pathname])

    useEffect(() => {

        if (pathname === "/signup") {
            signUpRef?.current?.focus()
        } else {
            signInRef?.current?.focus()
        }
    }, [pathname, signUpRef, signInRef])
    return (
        // <div className={styles.green_bg}>
        <section className={styles.container}>
            {/* <img src={bag} className={styles.side_image} alt="" /> */}

            <div className={styles.sub_container}>
                <div className={`${styles.wrapper} ${slider ? styles.active : ""}`}>
                    <Signin ref={signUpRef} />
                    <Signup ref={signInRef} />
                </div>
            </div>
        </section>
        // </div>
    )
}

export default Authentication