import styles from "./watch.module.scss"
import { VideoEmbed } from "@components"
import { Avatar } from "react-felix-ui"
import { useVideos, useAuth, useWatchLater, useHistory, useLikes, usePlaylist } from "@providers"
import { useToast } from "react-felix-ui"
import {
    MdOutlineThumbUpOffAlt,
    MdThumbUpAlt,
    BiListPlus,
    AiOutlineClockCircle,
    AiFillClockCircle,
    RiShareForwardLine
} from "@icons"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useShareVideo from "@hooks/useShareVideo.js"

const Watch = () => {
    const [video, setVideo] = useState(null)
    const [watchLater, setWatchLater] = useState(false)
    const [like, setLike] = useState(false)
    const { id } = useParams();

    const { getVideo } = useVideos()
    const { addToWatchLater, removeFromWatchLater, checkInWatchLater } = useWatchLater()
    const { addToLikes, removeFromLikes, checkInLikes } = useLikes()
    const { UserState } = useAuth()
    const { addToHistory } = useHistory()
    const { openPlaylistModal } = usePlaylist()
    const shareVideo = useShareVideo()
    const toast = useToast()

    useEffect(() => {
        getVideo(id, setVideo)
    }, [])

    useEffect(() => {
        if (video) {
            UserState?._id && addToHistory(video)
            setWatchLater(checkInWatchLater(video._id))
            setLike(checkInLikes(video._id))
        }
    }, [video])



    return (
        <div className={styles.container}>
            {
                video !== null &&
                <div className={styles.video_con}>
                    <VideoEmbed embedId={video.embedId} />
                    <h1>{video.title}</h1>
                    <div className={styles.sub_con}>
                        <div className={styles.info}>
                            <span>
                                <Avatar size="sm" src={require(`@assets/images/icons/${video.icon}`)} className={styles.avatar} />
                                {video.creator}
                            </span>
                            <span>{video.views} views</span>
                            <span>{video.uploadedOn}</span>
                        </div>
                        <div className={styles.actions}>

                            {like
                                ? <button className={`${styles.action} ${styles.active}`} onClick={() => { setLike(false); removeFromLikes(video._id); }} ><MdThumbUpAlt /> LIKED</button>
                                : <button className={styles.action} onClick={() => { setLike(true); addToLikes(video) }}><MdOutlineThumbUpOffAlt /> LIKE</button>
                            }

                            <button className={styles.action} onClick={() => openPlaylistModal(video)}><BiListPlus /> SAVE </button>

                            {watchLater
                                ? <button className={`${styles.action} ${styles.active}`} onClick={() => { setWatchLater(false); removeFromWatchLater(video._id); }} ><AiFillClockCircle /> WATCH LATER</button>
                                : <button className={styles.action} onClick={() => { setWatchLater(true); addToWatchLater(video) }}><AiOutlineClockCircle /> WATCH LATER</button>
                            }
                            <button className={styles.action} onClick={() => shareVideo(video._id)}><RiShareForwardLine /> SHARE</button>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <p>
                            {video.description}
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Watch