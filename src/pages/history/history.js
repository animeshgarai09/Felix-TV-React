import styles from "./history.module.scss"
import { VideoCard, SidePane } from "@components"
import { Button } from "react-felix-ui"
import { useHistory } from "@providers"
import { NotFound } from "@components"
import { Helmet } from "react-helmet"

const History = () => {
    const { HistoryState: { history, count }, removeFromHistory, clearHistory } = useHistory()

    return (
        <>
            <Helmet>
                <title>History | Felix TV</title>
            </Helmet>

            <div className={styles.container}>
                <SidePane title="History" count={count} >
                    {history.length !== 0 && <Button variant="ghost" isRound={true} onClick={clearHistory}>Clear History</Button>}
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
                            : <NotFound title="No history to show" des="History is meant to be created with effort !!!" />
                    }
                </div>
            </div>
        </>
    )
}

export default History