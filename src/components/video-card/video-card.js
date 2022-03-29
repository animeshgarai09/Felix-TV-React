import styles from "./video-card.module.scss"
import { Image, Avatar, IconButton } from "react-felix-ui"
import { BsThreeDotsVertical, FiClock, BiListPlus, RiShareForwardLine } from "@icons"
import { DropDownMenu, DropDownItem } from "../dropdown/dropdown.js"
import { useState } from "react"

const VideoCard = ({
    isLoading,
    orientation,
    title,
    creator,
    icon,
    thumbnail,
    views,
    uploadedOn,
}) => {

    const [drop, setDrop] = useState(false)

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
                        <Image src={require(`@assets/images/thumbnails/${thumbnail}`)} alt="thumbnail" />
                    </div>
                    <div className={styles.content_wrap}>
                        <Avatar src={require(`@assets/images/icons/${icon}`)} size="md" className={styles.avatar} />

                        <div className={styles.con}>
                            <a className={styles.channel} href="#">{creator}</a>
                            <IconButton onClick={() => setDrop((prev) => !prev)} icon={<BsThreeDotsVertical />} className={styles.icon} />
                        </div>

                        <a className={styles.name} href="#">{title}</a>

                        <div className={styles.info}>
                            <span className={styles.views}>{views} views</span>
                            <span className={styles.time}> {uploadedOn}</span>
                        </div>
                        {drop && <DropDownMenu className={styles.dropdown} onClickClose={() => setDrop(false)}>
                            <DropDownItem><FiClock /> Save to Watch later</DropDownItem>
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