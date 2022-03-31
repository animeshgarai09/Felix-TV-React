import { createContext, useContext, useReducer, useEffect, } from "react"
import { VideoReducer } from '../reducers/video-reducer'
import axios from "axios"
const VideoContext = createContext()

const initState = {
    videos: [],
    categories: []
}
const VideoProvider = ({ children }) => {

    const [VideoState, VideoDispatch] = useReducer(VideoReducer, initState)
    let endpoints = [
        "/api/videos",
        "/api/categories",
    ];

    useEffect(() => {
        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
            axios.spread((...allData) => {
                const [videos, categories] = allData

                VideoDispatch({
                    type: "SET_VIDEOS_&_CATEGORIES",
                    payload: {
                        videos: videos.data.videos,
                        categories: categories.data.categories
                    }
                })
            })
        );
    }, [])

    const getVideo = async (id, setVideo) => {
        try {
            const response = await axios.get(`/api/video/${id}`)
            if (response.status === 200) {
                setVideo(response.data.video)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <VideoContext.Provider value={{ VideoState, getVideo }}>
            {children}
        </VideoContext.Provider>
    )
}
const useVideos = () => useContext(VideoContext);

export { useVideos, VideoProvider }