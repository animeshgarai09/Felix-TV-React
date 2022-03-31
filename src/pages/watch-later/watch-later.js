import styles from "./watch-later.module.scss"
import { VideoCard, SidePane } from "@components"
import { useWatchLater } from "@providers"
const WatchLater = () => {
    const { WatchLaterState } = useWatchLater()
    return (
        <div className={styles.container}>
            <SidePane title="Watch Later..." time="30 Minutes" count={30} />
            <div className={styles.main}>
                {
                    WatchLaterState.length !== 0
                        ? WatchLaterState.map((item, i) => {
                            return <VideoCard
                                orientation="horizontal"
                                videoItem={item}
                                isRemoveWatchLater={true}
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

export default WatchLater