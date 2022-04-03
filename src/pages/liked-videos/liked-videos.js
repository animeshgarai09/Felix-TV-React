import styles from "./liked-videos.module.scss"
import { VideoCard, SidePane } from "@components"
import { useLikes } from "@providers"
import { NotFound } from "@components"
import { Helmet } from "react-helmet"

const LikedVideos = () => {
    const { LikesState: { likes, count } } = useLikes()

    return (
        <>
            <Helmet>
                <title>Liked videos | Felix TV</title>
            </Helmet>

            <div className={styles.container}>
                <SidePane title="Liked Videos" time="30 Minutes" count={count} />
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
                            : <NotFound title="No liked videos" des="Sad to see you haven't liked any of the videos." />

                    }
                </div>
            </div>
        </>
    )
}

export default LikedVideos