import styles from "./playlists.module.scss"
import PlaylistPane from "./sub-components/playlist-pane"
import { VideoCard, SidePane } from "@components"
import { usePlaylist } from "@providers"
import { useEffect, useState } from "react"
import { Button } from "react-felix-ui"
import { NotFound } from "@components"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"

const Playlists = () => {
    const { PlaylistState: { playlists, selectedPlaylistId },
        openPlaylistModal,
        onSelectPlaylist,
        removeVideoFromPlaylist,
        deletePlaylist
    } = usePlaylist()

    const { playListId } = useParams();
    const [filteredPlaylist, setFilteredPlaylist] = useState(null)

    useEffect(() => {
        console.log(playListId)
        onSelectPlaylist(playListId)
    }, [playListId])

    useEffect(() => {
        const filteredList = playlists.filter((item) => item._id === selectedPlaylistId)
        setFilteredPlaylist(filteredList[0])
    }, [playlists, selectedPlaylistId])

    return (
        <>
            <Helmet>
                <title>Playlists | Felix TV</title>
            </Helmet>

            <div className={styles.container}>

                {
                    playlists.length !== 0
                        ? <PlaylistPane
                            playlists={playlists}
                            selectedPlaylistId={selectedPlaylistId}
                            onCreate={openPlaylistModal}
                        />
                        : <SidePane title="Playlists" count={false}>
                            <Button variant="ghost" isRound={true} onClick={openPlaylistModal}>Create Playlist</Button>
                        </SidePane>
                }
                <div className={styles.main}>
                    {
                        filteredPlaylist
                            ? <>
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
                                {filteredPlaylist?.videos.length !== 0
                                    ? filteredPlaylist?.videos?.map((item, i) => {
                                        return <VideoCard
                                            orientation="horizontal"
                                            videoItem={item}
                                            onRemove={() => removeVideoFromPlaylist(item._id, filteredPlaylist._id, filteredPlaylist?.title)}
                                            key={i}
                                        />
                                    })
                                    : <NotFound title="Playlist is Empty" des="Add videos to your playlist first." />
                                }
                            </>

                            : playlists.length !== 0

                                ? <NotFound title="Select Playlist" des="Select playlist from the left to see all the saved videos." />
                                : <NotFound title="There is no playlist" des="Create playlists to save videos and organize." />
                    }
                </div>
            </div>
        </>
    )
}


export default Playlists