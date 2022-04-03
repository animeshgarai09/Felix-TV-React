import { Modal } from "@components"
import styles from "../playlists.module.scss"
import { Input, Button } from "react-felix-ui"
import useInputHandler from "@hooks/useInputHandler"
import { useEffect } from "react"
import { usePlaylist } from "@providers"

const PlaylistModal = ({
    closeModal,
    onCreate,
    onAdd,
    onRemove,
    onCreateAdd
}) => {
    const { inputState, inputChange, setInputState } = useInputHandler({
        playlistName: "",
    })
    const { PlaylistState: { playlists, modal, video, createBtnState }, selectedPlaylistId } = usePlaylist()

    const checkIfVideoInPlaylists = (id, playlists) => {
        return playlists.map(({ title, _id, videos }) => {
            return {
                title: title,
                playlistId: _id,
                check: videos.some((item) => item._id === id)
            }
        })
    }

    const playlistItems = video && checkIfVideoInPlaylists(video._id, playlists)

    const onCheck = (playlistId, title) => {
        onAdd(video, playlistId, title)
    }

    const onUnCheck = (playlistId, title) => {
        onRemove(video._id, playlistId, title)
    }

    const handleOnCreate = (playlistName) => {
        if (video !== null) {
            onCreateAdd(playlistName, video)
        } else {
            onCreate(playlistName)
        }
    }

    useEffect(() => {
        if (!modal) {
            setInputState({ playlistName: "" })
        }
    }, [modal])

    return (
        <Modal
            size="xs"
            isShowing={modal}
            onClose={closeModal}
            title={video ? "My Playlists" : "Create Playlist"}
        >
            {video &&
                <>
                    {
                        playlistItems?.map((item) => {
                            return <PlaylistItem key={item.playlistId} {...item} onCheck={onCheck} onUnCheck={onUnCheck} />
                        })
                    }
                </>
            }
            <form onSubmit={(e) => { e.preventDefault(); handleOnCreate(inputState.playlistName) }} className={styles.modal_content}>
                <Input type="text" name="playlistName" label="Name" value={inputState.playlistName} onChange={inputChange} />
                <Button type="submit" isWide={true} variant="ghost" isLoading={createBtnState}>Create</Button>
            </form>
        </Modal>
    )
}

const PlaylistItem = ({ title, playlistId, check, onCheck, onUnCheck }) => {
    const handleCheckBox = (e) => {
        if (e.target.checked) {
            onCheck(playlistId, title)
        } else {
            onUnCheck(playlistId, title)
        }
    }
    return (
        <label htmlFor={playlistId} className={styles.label}>
            <input id={playlistId} type="checkbox" name="playlist" checked={check} onChange={handleCheckBox} />
            {title}
        </label>
    )
}
export default PlaylistModal