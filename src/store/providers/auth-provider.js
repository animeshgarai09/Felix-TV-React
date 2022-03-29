import { createContext, useContext, useReducer, useEffect } from "react"
import { AuthReducer } from "../reducers/auth-reducer"
import axios from "axios"
import { useToast } from "react-felix-ui"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

const initialState = {
    _id: "",
    name: "",
    email: "",
    createdAt: "",
    updatedAt: "",
    encodedToken: ""
}
const AuthProvider = ({ children }) => {
    const [UserState, AuthDispatcher] = useReducer(AuthReducer, initialState)
    const toast = useToast()
    const navigate = useNavigate()

    const handleSignIn = (email, password, redirect, setState) => {
        axios.post("/api/auth/login", {
            email: email,
            password: password
        }).then((response) => {
            const user = response.data.foundUser
            toast({
                status: "success",
                message: `Hey ${user.fullName.split(" ")[0]}! Continue watching.`,
                duration: 2
            })

            setTimeout(() => {
                localStorage.setItem("felix-tv-user-token", response.data.encodedToken)
                setUserDetails(user, response.data.encodedToken)
                navigate(redirect, { replace: true })
            }, 500)
        }).catch((err) => {
            setState(false)
            toast({
                status: "error",
                message: `Invalid email & password !`,
            })
        })
    }

    const handleSignUp = (fullName, email, password, setState) => {
        axios.post("/api/auth/signup", {
            fullName: fullName,
            email: email,
            password: password
        }).then((response) => {
            const user = response.data.createdUser
            toast({
                status: "success",
                message: `Hey ${user.fullName.split(" ")[0]}! Continue watching.`,
                duration: 2
            })

            setTimeout(() => {
                localStorage.setItem("felix-tv-user-token", response.data.encodedToken)
                setUserDetails(user, response.data.encodedToken)
                navigate("/explore")
            }, 500)
        }).catch((err) => {
            setState(false)
            toast({
                status: "error",
                message: `Invalid email & password !`,
            })
        })
    }

    const handleLogout = () => {
        AuthDispatcher({
            type: "REMOVE_USER"
        })
        navigate("/")
    }

    const setUserDetails = (user, token) => {
        AuthDispatcher({
            type: "SET_USER",
            payload: {
                _id: user.id,
                name: user.fullName,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
                encodedToken: token
            }
        })
    }

    useEffect(() => {
        const token = localStorage.getItem("felix-tv-user-token")
        if (token) {
            axios.post("/api/auth/verify", {
                encodedToken: token
            }).then((response) => {
                setUserDetails(response.data, token)
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={{ UserState, handleSignIn, handleSignUp, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }