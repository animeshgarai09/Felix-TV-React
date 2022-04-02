import styles from "./history.module.scss"
import { VideoCard, SidePane } from "@components"
import { Button } from "react-felix-ui"
import { useHistory } from "@providers"

const History = () => {
    const { HistoryState: { history }, removeFromHistory, clearHistory } = useHistory()

    return (
        <div className={styles.container}>
            <SidePane title="History" time="30 Minutes" count={4} >
                <Button variant="ghost" isRound={true} onClick={clearHistory}>Clear History</Button>
            </SidePane>
            <div className={styles.main}>
                {
                    history.length !== 0
                        ? [...history].reverse().map((item, i) => {
                            return <VideoCard
                                orientation="horizontal"
                                videoItem={item}
                                key={i}
                                onRemove={removeFromHistory}
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

export default History