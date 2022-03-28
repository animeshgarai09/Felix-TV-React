
import styles from "../authentication.module.scss"
import { Input, Button } from "react-felix-ui"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaChevronRight } from "@icons"
import axios from "axios";
import { useToast } from "react-felix-ui"
import { useInputHandler } from "@hooks/useInputHandler"
import { useState } from "react"

const Signin = ({ signInRef }) => {




    /* Submit button state */
    const [submitState, setSubmitState] = useState(false)
    const [guestState, setGuestState] = useState(false)

    /* Form input handler from useInputHandler hook*/
    const { inputState, inputChange } = useInputHandler({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("submit")
    }

    const handleGuest = () => {
        console.log("Guest")
    }
    const handleSignIn = (email, password, redirect, setState) => {
        console.log("Signin")
    }
    return (
        <div className={styles.signin}>
            <div className={styles.heading}>
                <h2>Sign in</h2>
                <Link to="/signup"><Button size="sm" variant="ghost" isRound={true} isTransform={false} >Sign up <FaChevronRight /> </Button></Link>
            </div>
            <form onSubmit={handleSubmit}>
                <Input type="email" label="Email" name="email" value={inputState.email} Fref={signInRef} onChange={inputChange} />
                <Input type="password" label="Password" name="password" value={inputState.password} onChange={inputChange} />
                <div className={styles.checkbox}>
                    <input id="check" type="checkbox" />
                    <label for="check">Keep me signed in</label>
                </div>
                <div className={styles.form_buttons}>
                    <Button type="submit" isWide={true} isTransform={false} isLoading={submitState}>Sign in</Button>
                    <Button theme="gray" onClick={handleGuest} isWide={true} isTransform={false} isLoading={guestState}>Sign in as a guest</Button>
                    <a href="#" className="text-center"> Forgot password?</a>
                </div>
            </form>
        </div>
    )
}

export default Signin