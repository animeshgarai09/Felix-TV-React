
import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
import { useToast } from 'react-felix-ui'

const WatchLaterContext = createContext()

const WatchLaterProvider = ({ children }) => {
    const [WatchLaterState, setWatchLaterState] = useState([])
    const encodedToken = localStorage.getItem("felix-tv-user-token");
    const toast = useToast()
    const navigate = useNavigate()
    const location = useLocation()

    const addToWatchLater = (item) => {
        const checkPresence = WatchLaterState.filter((bItem => bItem._id === item._id))
        if (checkPresence.length === 0) {
            axios.post("/api/user/watchlater",
                { video: item },
                {
                    headers: {
                        authorization: encodedToken,
                    },
                }
            ).then((response) => {
                setWatchLaterState(response.data.watchlater);
                toast({
                    status: "success",
                    message: "Video added to watch later",
                    duration: 2
                })
            }).catch((err) => {
                toast({
                    status: "error",
                    message: "Sign in to your account first",
                    duration: 2
                })
                navigate('/signin', { state: { from: location }, replace: true })
            })
        } else {
            toast({
                status: "error",
                message: "Video already in watch later",
                duration: 1.5
            })
        }
    }

    const removeFromWatchLater = (id) => {
        axios.delete(`/api/user/watchlater/${id}`, {
            headers: {
                authorization: encodedToken,
            },
        }).then((response) => {
            setWatchLaterState(response.data.watchlater);
            toast({
                status: "success",
                message: "Video removed from watch later",
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
    const checkInWatchLater = (id) => {
        return WatchLaterState.some((item) => item._id === id)
    }
    return (
        <WatchLaterContext.Provider value={{ WatchLaterState, setWatchLaterState, addToWatchLater, removeFromWatchLater, checkInWatchLater }}>
            {children}
        </WatchLaterContext.Provider>
    )
}
const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater }