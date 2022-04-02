import { createContext, useContext, useReducer, useState } from "react"
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
import { useToast } from 'react-felix-ui'
import PlaylistModal from "@pages/playlists/sub-components/playlist-modal"
import { PlaylistReducer } from "../reducers/playlist-reducer"

const PlaylistContext = createContext()

const initState = {
    playlists: [],
    selectedPlaylistId: null,
    modal: false,
    video: null,
    createBtnState: false,
}


const PlaylistProvider = ({ children }) => {

    const [PlaylistState, PlaylistDispatch] = useReducer(PlaylistReducer, initState)

    const encodedToken = localStorage.getItem("felix-tv-user-token");
    const toast = useToast()
    const navigate = useNavigate()
    const location = useLocation()

    const openPlaylistModal = (video) => {
        if (video) {
            PlaylistDispatch({
                type: "SET_VIDEO",
                payload: video
            })
        } else {
            PlaylistDispatch({
                type: "SET_VIDEO",
                payload: null
            })
        }
        PlaylistDispatch({
            type: "SET_MODAL",
            payload: true
        })
    }

    const closePlaylistModal = () => {
        PlaylistDispatch({
            type: "RESET",
            payload: false
        })
    }

    const createPlaylist = (title) => {

        PlaylistDispatch({
            type: "SET_CREATE_BTN_STATE",
            payload: true
        })

        axios.post("/api/user/playlists",
            {
                playlist: { title }
            },
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        ).then((response) => {
            PlaylistDispatch({
                type: "SET_PLAYLISTS",
                payload: response.data.playlists
            })
            if (PlaylistState.selectedPlaylistId === null) {
                PlaylistDispatch({
                    type: "SET_SELECTED_PLAYLIST",
                    payload: response.data.playlists[0]._id
                })
            }

        }).catch((err) => {
            toast({
                status: "error",
                message: "Sign in to your account first",
                duration: 2
            })
            navigate('/signin', { state: { from: location }, replace: true })
        }).finally(() => {
            PlaylistDispatch({
                type: "RESET",
                payload: false
            })
        })
    }

    const addVideoToPlaylist = (video, playlistId, playlistName) => {
        axios.post(`/api/user/playlists/${playlistId}`,
            { video },
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        ).then((response) => {
            PlaylistDispatch({
                type: "SET_PLAYLIST",
                payload: response.data.playlist
            })
            toast({
                status: "success",
                message: `Video added to ${playlistName} `,
                duration: 2
            })
        }).catch((err) => {
            console.log(err)
            toast({
                status: "error",
                message: "Sign in to your account first",
                duration: 2
            })
            navigate('/signin', { state: { from: location }, replace: true })
        })
    }

    const removeVideoFromPlaylist = (videoId, playlistId, playlistName) => {
        axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        ).then((response) => {
            PlaylistDispatch({
                type: "SET_PLAYLIST",
                payload: response.data.playlist
            })
            toast({
                status: "success",
                message: `Video removed from ${playlistName} `,
                duration: 2
            })
        }).catch((err) => {
            console.log(err)
            toast({
                status: "error",
                message: "Sign in to your account first",
                duration: 2
            })
            navigate('/signin', { state: { from: location }, replace: true })
        })
    }

    const deletePlaylist = (playlistId, playlistName) => {
        axios.delete(`/api/user/playlists/${playlistId}`,
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        ).then((response) => {
            PlaylistDispatch({
                type: "SET_PLAYLISTS",
                payload: response.data.playlists
            })
            toast({
                status: "success",
                message: `${playlistName} playlist deleted`,
                duration: 2
            })
        }).catch((err) => {
            console.log(err)
            toast({
                status: "error",
                message: "Sign in to your account first",
                duration: 2
            })
            navigate('/signin', { state: { from: location }, replace: true })
        })
    }

    const onSelectPlaylist = (playlistId) => {
        PlaylistDispatch({
            type: "SET_SELECTED_PLAYLIST",
            payload: playlistId
        })
    }

    return (
        <PlaylistContext.Provider value={{
            PlaylistState,
            openPlaylistModal,
            onSelectPlaylist,
            removeVideoFromPlaylist,
            deletePlaylist
        }}
        >
            {children}
            <PlaylistModal
                closeModal={closePlaylistModal}
                onCreate={createPlaylist}
                onAdd={addVideoToPlaylist}
                onRemove={removeVideoFromPlaylist}
            />
        </PlaylistContext.Provider>
    )
}

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider }