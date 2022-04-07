import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
import { useToast } from 'react-felix-ui'

const HistoryContext = createContext()

const initState = {
    history: [],
    count: 0,
}
const HistoryProvider = ({ children }) => {

    const [HistoryState, setHistoryState] = useState(initState)
    const encodedToken = localStorage.getItem("felix-tv-user-token");
    const toast = useToast()
    const navigate = useNavigate()
    const location = useLocation()

    const addToHistory = (item) => {

        if (!checkInHistory(item._id)) {
            axios.post("/api/user/history",
                { video: item },
                {
                    headers: {
                        authorization: encodedToken,
                    },
                }
            ).then((response) => {
                setHistoryState({ history: response.data.history, count: response.data.history.length });
            }).catch((err) => {
                toast({
                    status: "error",
                    message: "Sign in to your account first",
                    duration: 2
                })
                navigate('/signin', { state: { from: location }, replace: true })
            })
        }
    }

    const removeFromHistory = (id) => {
        axios.delete(`/api/user/history/${id}`, {
            headers: {
                authorization: encodedToken,
            },
        }).then((response) => {
            setHistoryState({ history: response.data.history, count: response.data.history.length });
            toast({
                status: "success",
                message: "Video removed from history",
                duration: 2
            })
        }).catch(err => {
            console.log(err);
            toast({
                status: "error",
                message: "Sign in to your account first",
                duration: 2
            })
            navigate('/signin', { state: { from: location }, replace: true })
        })
    }

    const clearHistory = () => {
        axios.delete(`/api/user/history/all`, {
            headers: {
                authorization: encodedToken,
            },
        }).then((response) => {
            setHistoryState(initState);
            toast({
                status: "success",
                message: "History is cleared",
                duration: 2
            })
        }).catch(err => {
            console.log(err);
            toast({
                status: "error",
                message: "Sign in to your account first",
                duration: 2
            })
            navigate('/signin', { state: { from: location }, replace: true })
        })
    }

    const checkInHistory = (id) => {
        return HistoryState.history.some((item) => item._id === id)
    }

    return (
        <HistoryContext.Provider value={{ HistoryState, setHistoryState, addToHistory, removeFromHistory, clearHistory, checkInHistory }}>
            {children}
        </HistoryContext.Provider>
    )
}
const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryProvider }