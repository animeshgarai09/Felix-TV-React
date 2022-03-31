import styles from "./liked-videos.module.scss"
import { VideoCard, SidePane } from "@components"
import { useLikes } from "@providers"

const LikedVideos = () => {
    const { LikesState: { likes } } = useLikes()

    return (
        <div className={styles.container}>
            <SidePane title="Liked Videos" time="30 Minutes" count={4} />
            <div className={styles.main}>
                {
                    likes.length !== 0
                        ? likes.map((item, i) => {
                            return <VideoCard
                                orientation="horizontal"
                                videoItem={item}
                                key={i}
                            />
                        })
                        : [...Array(4)].map((_, i) => {
                            return <VideoCard orientation="horizontal" key={i} isLoading={true} />
                        })
                }
            </div>
        </div>
    )
}

export default LikedVideos