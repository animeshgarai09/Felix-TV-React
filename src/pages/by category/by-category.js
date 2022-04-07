import styles from "./by-category.module.scss"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import { useVideos } from "@providers"
import { VideoCard } from "@components"

const ExploreByCategory = () => {
    const { category } = useParams()
    const { VideoState: { trending, documentary, gardening } } = useVideos()

    const getVideos = () => {
        if (category === "trending") {
            return mapVideoFromArray(trending)
        } else if (category === "documentaries") {
            return mapVideoFromArray(documentary)
        } else if (category === "basic-gardening") {
            return mapVideoFromArray(gardening)
        }
    }

    const mapVideoFromArray = (arr) => {
        return arr.map((item, i) => {
            return <VideoCard
                key={i}
                videoItem={item}
            />
        })
    }
    return (
        <>
            <Helmet>
                <title>{category} | Felix TV</title>
            </Helmet>
            <div className={styles.container}>
                <section >
                    {getVideos()}
                </section>
            </div>
        </>
    )
}

export default ExploreByCategory