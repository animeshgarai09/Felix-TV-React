import { videoCountByCategory } from "./reducer-functions"
export const VideoReducer = (state, action) => {
    const videos = action.payload.videos
    const categories = action.payload.categories
    switch (action.type) {
        case "SET_VIDEOS_&_CATEGORIES":
            return {
                ...state,
                videos: videos,
                categories: videoCountByCategory(videos, categories),
                trending: videos.filter((video) => video.tags === "trending"),
                documentary: videos.filter((video) => video.category === "Documentary"),
                gardening: videos.filter((video) => video.category === "Basic Gardening")
            }
        default:
            return state
    }

}  