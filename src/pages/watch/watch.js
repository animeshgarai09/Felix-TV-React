import styles from "./watch.module.scss"
import { VideoEmbed } from "@components"
import { Avatar } from "react-felix-ui"
import { useVideos } from "@providers/video-provider"
import { useWatchLater } from "@providers/watch-later-provider"
import {
    HiOutlineThumbUp,
    BiListPlus,
    AiOutlineClockCircle,
    AiFillClockCircle,
    RiShareForwardLine
} from "@icons"

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"

const Watch = () => {
    const [video, setVideo] = useState(null)
    const [watchLater, setWatchLater] = useState(false)
    const { id } = useParams();
    const { getVideo } = useVideos()
    const { addToWatchLater, removeFromWatchLater, checkInWatchLater } = useWatchLater()

    useEffect(() => {
        getVideo(id, setVideo)
    }, [])
    useEffect(() => {
        video && setWatchLater(checkInWatchLater(video._id))
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
                            <button className={styles.action}><HiOutlineThumbUp /> 1 LIKE</button>
                            <button className={styles.action}><BiListPlus /> SAVE </button>
                            {watchLater
                                ? <button className={`${styles.action} ${styles.active}`} onClick={() => { setWatchLater(false); removeFromWatchLater(video._id); }} ><AiFillClockCircle /> WATCH LATER</button>
                                : <button className={styles.action} onClick={() => { setWatchLater(true); addToWatchLater(video) }}><AiOutlineClockCircle /> WATCH LATER</button>
                            }
                            <button className={styles.action}><RiShareForwardLine /> SHARE</button>
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