import styles from "./video-card.module.scss"
import { Image, Avatar, IconButton } from "react-felix-ui"
import thumbnail from "@assets/images/thumbnails/-jS496h3vcw-MQ.jpg"
import channel from "@assets/images/channels/dw.jpeg"
import { BsThreeDotsVertical, FiClock, BiListPlus, RiShareForwardLine } from "@icons"
import { DropDownMenu, DropDownItem } from "../dropdown/dropdown.js"
import { useState } from "react"

const VideoCard = () => {

    const [drop, setDrop] = useState(false)

    return (
        <div className={`${styles.container} ${styles.vertical}`}>
            <div className={styles.image}>
                <Image src={thumbnail} alt="thumbnail" />
            </div>
            <div className={styles.content_wrap}>
                <Avatar src={channel} size="md" className={styles.avatar} />

                <div className={styles.con}>
                    <a className={styles.channel} href="#">DW Documentary</a>
                    <IconButton onClick={() => setDrop((prev) => !prev)} icon={<BsThreeDotsVertical />} className={styles.icon} />
                </div>

                <a className={styles.name} href="#">Agricultural Engineering: Innovative Technologies | Masters of Engineering</a>

                <div className={styles.info}>
                    <span className={styles.views}>50k views</span>
                    <span className={styles.time}> 5 month ago</span>
                </div>
                {drop && <DropDownMenu className={styles.dropdown} onClickClose={() => setDrop(false)}>
                    <DropDownItem><FiClock /> Save to Watch later</DropDownItem>
                    <DropDownItem><BiListPlus /> Save to playlist</DropDownItem>
                    <DropDownItem><RiShareForwardLine /> Share</DropDownItem>
                </DropDownMenu>
                }

            </div>
        </div>
    )
}

export default VideoCard