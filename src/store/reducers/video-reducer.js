import { videoCountByCategory } from "./reducer-functions"
export const VideoReducer = (state, action) => {
    switch (action.type) {
        case "SET_VIDEOS_&_CATEGORIES":
            return { ...state, videos: action.payload.videos, categories: videoCountByCategory(action.payload.videos, action.payload.categories) }
        default:
            return state
    }

}  