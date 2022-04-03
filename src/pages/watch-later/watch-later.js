import styles from "./watch-later.module.scss"
import { VideoCard, SidePane } from "@components"
import { useWatchLater } from "@providers"
import { NotFound } from "@components"
import { Helmet } from "react-helmet"

const WatchLater = () => {
    const { WatchLaterState: { watchlater, count } } = useWatchLater()
    return (
        <>
            <Helmet>
                <title>Watch later | Felix TV</title>
            </Helmet>
            <div className={styles.container}>
                <SidePane title="Watch Later..." count={count} />
                <div className={styles.main}>
                    {
                        watchlater.length !== 0
                            ? watchlater.map((item, i) => {
                                return <VideoCard
                                    orientation="horizontal"
                                    videoItem={item}
                                    isRemoveWatchLater={true}
                                    key={i}
                                />
                            })
                            : <NotFound title="No videos added" des="Hope you find something to watch later !" />

                    }
                </div>
            </div>
        </>

    )
}

export default WatchLater