import styles from "../authentication.module.scss"
import { Input, Button } from "react-felix-ui"
import { Link } from 'react-router-dom';
import { FaChevronLeft } from "@icons"
import useInputHandler from "@hooks/useInputHandler"
import { useState, forwardRef } from "react"
import { useAuth } from "@providers/auth-provider"
import { Helmet } from "react-helmet"

const Signup = forwardRef((ref) => {

    const { handleSignUp } = useAuth()
    const [btnState, setBtnState] = useState(false)

    const { inputState, inputChange } = useInputHandler({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        setBtnState(true)
        handleSignUp(inputState.name, inputState.email, inputState.password, setBtnState)
    }

    return (
        <>
            <Helmet>
                <title>Sign in| Felix TV</title>
            </Helmet>
            <div className={styles.signup}>
                <div className={styles.heading}>
                    <Link to="/signin"><Button size="sm" variant="ghost" isRound={true} isTransform={false} ><FaChevronLeft /> Sign up</Button></Link>
                    <h2>Sign up</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <Input type="text" label="Full name" name="name" value={inputState.name} onChange={inputChange} />
                    <Input type="email" label="Email" name="email" value={inputState.email} onChange={inputChange} />
                    <Input type="password" label="Password" name="password" value={inputState.password} onChange={inputChange} />

                    <div className={styles.form_buttons}>
                        <Button type="submit" isWide={true} isTransform={false} isLoading={btnState} >Sign Up</Button>
                    </div>
                </form>
            </div>
        </>
    )
})

export default Signup