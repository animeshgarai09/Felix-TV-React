import styles from "./video-card.module.scss"
import { Image, Avatar, IconButton } from "react-felix-ui"
import { BsThreeDotsVertical, AiOutlineClockCircle, BiListPlus, RiShareForwardLine, MdDeleteOutline } from "@icons"
import { DropDownMenu, DropDownItem } from "../dropdown/dropdown.js"
import { useState } from "react"
import { useWatchLater } from "@providers/watch-later-provider"
import { Link } from "react-router-dom"
const VideoCard = ({
    isLoading,
    orientation,
    isRemoveWatchLater = false,
    videoItem
}) => {

    const {
        _id,
        title,
        creator,
        icon,
        thumbnail,
        views,
        uploadedOn,
    } = videoItem ? videoItem : {}

    const [drop, setDrop] = useState(false)
    const { addToWatchLater, removeFromWatchLater } = useWatchLater()
    return (
        <div className={`${styles.container} ${orientation ? styles.horizontal : styles.vertical}`}>
            {isLoading ?
                <>
                    <div className={`${styles.skeleton_image} loader`}></div>
                    <div className={`${styles.skeleton_details} ${styles.content_wrap}`}>
                        <span className='loader'></span>
                        <span className='loader'></span>
                        <span className='loader'></span>
                        <span className='loader'></span>
                        <span className='loader'></span>
                        <span className='loader'></span>
                    </div>
                </>

                : <>
                    <div className={styles.image}>
                        <Link className={styles.name} to={`/watch/${_id}`}><Image src={require(`@assets/images/thumbnails/${thumbnail}`)} alt="thumbnail" /></Link>
                    </div>
                    <div className={styles.content_wrap}>
                        <Avatar src={require(`@assets/images/icons/${icon}`)} size="md" className={styles.avatar} />

                        <div className={styles.con}>
                            <a className={styles.channel} href="#">{creator}</a>
                            <IconButton onClick={() => setDrop((prev) => !prev)} icon={<BsThreeDotsVertical />} className={styles.icon} />
                        </div>

                        <Link className={styles.name} to={`/watch/${_id}`}>{title}</Link>

                        <div className={styles.info}>
                            <span className={styles.views}>{views} views</span>
                            <span className={styles.time}> {uploadedOn}</span>
                        </div>
                        {drop && <DropDownMenu className={styles.dropdown} onClickClose={() => setDrop(false)}>
                            {
                                isRemoveWatchLater
                                    ? < DropDownItem onClick={() => removeFromWatchLater(videoItem._id)}><MdDeleteOutline /> Remove from Watch later</DropDownItem>
                                    : < DropDownItem onClick={() => addToWatchLater(videoItem)}><AiOutlineClockCircle /> Save to Watch later</DropDownItem>
                            }
                            <DropDownItem><BiListPlus /> Save to playlist</DropDownItem>
                            <DropDownItem><RiShareForwardLine /> Share</DropDownItem>
                        </DropDownMenu>
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default VideoCard