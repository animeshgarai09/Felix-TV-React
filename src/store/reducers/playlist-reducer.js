import { updatePlaylists } from "./reducer-functions"

export const PlaylistReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_PLAYLISTS":
            return { ...state, playlists: payload }
        case "SET_PLAYLIST":
            return { ...state, playlists: updatePlaylists([...state.playlists], payload) }
        case "SET_SELECTED_PLAYLIST":
            return { ...state, selectedPlaylistId: payload }
        case "SET_MODAL":
            return { ...state, modal: payload }
        case "SET_VIDEO":
            return { ...state, video: payload }
        case "SET_CREATE_BTN_STATE":
            return { ...state, createBtnState: payload }
        case "RESET":
            return { ...state, createBtnState: false, video: null, modal: false }
        default:
            return state
    }
}