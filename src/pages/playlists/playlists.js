import styles from "./playlists.module.scss"
import PlaylistPane from "./sub-components/playlist-pane"
import { VideoCard, SidePane } from "@components"
import { usePlaylist } from "@providers"
import { useEffect, useState } from "react"
import { Button } from "react-felix-ui"

const Playlists = () => {
    const { PlaylistState: { playlists, selectedPlaylistId },
        openPlaylistModal,
        onSelectPlaylist,
        removeVideoFromPlaylist,
        deletePlaylist
    } = usePlaylist()

    const [filteredPlaylist, setFilteredPlaylist] = useState({})

    useEffect(() => {
        const filteredList = playlists.filter((item) => item._id === selectedPlaylistId)
        setFilteredPlaylist(filteredList[0])
    }, [playlists, selectedPlaylistId])

    return (
        <div className={styles.container}>

            <PlaylistPane
                playlists={playlists}
                selectedPlaylistId={selectedPlaylistId}
                onCreate={openPlaylistModal}
                onSelectPlaylist={onSelectPlaylist}
            />

            <div className={styles.main}>
                <div className={styles.actions}>
                    {
                        filteredPlaylist?._id && <>
                            <h3>{filteredPlaylist?.title}</h3>
                            <Button
                                theme="danger"
                                size="sm"
                                isTransform={false}
                                onClick={() => deletePlaylist(filteredPlaylist._id, filteredPlaylist.title)}
                            >Delete Playlist</Button>
                        </>
                    }
                </div>
                {
                    filteredPlaylist?.videos?.map((item, i) => {
                        return <VideoCard
                            orientation="horizontal"
                            videoItem={item}
                            onRemove={() => removeVideoFromPlaylist(item._id, filteredPlaylist._id, filteredPlaylist?.title)}
                            key={i}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Playlists