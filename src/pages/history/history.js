import styles from "./history.module.scss"
import { VideoCard, SidePane } from "@components"
import { Button } from "react-felix-ui"
const History = () => {
    return (
        <div className={styles.container}>
            <SidePane title="History" time="30 Minutes" count={4} >
                <Button variant="ghost" isRound={true}>Clear History</Button>
            </SidePane>
            <div className={styles.main}>
                <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" />
                <VideoCard orientation="horizontal" />
            </div>
        </div>
    )
}

export default History