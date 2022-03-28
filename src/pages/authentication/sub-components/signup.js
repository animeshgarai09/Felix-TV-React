import styles from "../authentication.module.scss"
import { Input, Button } from "react-felix-ui"
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft } from "@icons"
import axios from "axios";
import { useToast } from "react-felix-ui"
import { useInputHandler } from "@hooks/useInputHandler"
import { useState, useEffect, forwardRef } from "react"

const Signup = forwardRef((ref) => {


    const navigate = useNavigate()

    const toast = useToast()
    const [btnState, setBtnState] = useState(false)

    const { inputState, inputChange } = useInputHandler({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Subit")
    }

    return (
        <div className={styles.signup}>
            <div className={styles.heading}>
                <Link to="/signin"><Button size="sm" variant="ghost" isRound={true} isTransform={false} ><FaChevronLeft /> Sign up</Button></Link>
                <h2>Sign up</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Input type="text" label="Full name" name="name" value={inputState.name} onChange={inputChange} />
                <Input type="email" label="Email" name="email" value={inputState.email} onChange={inputChange} />
                <Input type="password" label="Password" name="password" value={inputState.password} onChange={inputChange} />
                <div className={styles.checkbox}>
                    <input id="check" type="checkbox" />
                    <label for="check">Keep me signed in</label>
                </div>
                <div className={styles.form_buttons}>
                    <Button type="submit" isWide={true} isTransform={false} isLoading={btnState} >Sign Up</Button>
                </div>
            </form>
        </div>
    )
})

export default Signup