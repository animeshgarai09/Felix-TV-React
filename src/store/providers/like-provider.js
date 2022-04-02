import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
import { useToast } from 'react-felix-ui'

const LikesContext = createContext()

const initState = {
    likes: [],
    count: 0,
    // playTime: 0,
}


const LikesProvider = ({ children }) => {

    const [LikesState, setLikesState] = useState(initState)
    const encodedToken = localStorage.getItem("felix-tv-user-token");
    const toast = useToast()
    const navigate = useNavigate()
    const location = useLocation()

    const addToLikes = (item) => {

        if (!checkInLikes(item._id)) {
            axios.post("/api/user/likes",
                { video: item },
                {
                    headers: {
                        authorization: encodedToken,
                    },
                }
            ).then((response) => {
                setLikesState({ ...LikesState, likes: response.data.likes });
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

    const removeFromLikes = (id) => {
        axios.delete(`/api/user/likes/${id}`, {
            headers: {
                authorization: encodedToken,
            },
        }).then((response) => {
            setLikesState({ ...LikesState, likes: response.data.likes });
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

    const checkInLikes = (id) => {
        return LikesState.likes.some((item) => item._id === id)
    }

    return (
        <LikesContext.Provider value={{ LikesState, addToLikes, removeFromLikes, checkInLikes }}>
            {children}
        </LikesContext.Provider>
    )
}

const useLikes = () => useContext(LikesContext);

export { useLikes, LikesProvider }