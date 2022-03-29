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
    return (
        <VideoContext.Provider value={VideoState}>
            {children}
        </VideoContext.Provider>
    )
}
const useVideos = () => useContext(VideoContext);

export { useVideos, VideoProvider }