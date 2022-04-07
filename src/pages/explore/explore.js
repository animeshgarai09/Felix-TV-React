import styles from "./explore.module.scss"
import { VideoCard } from "@components"
import Slider from "react-slick";
import { useVideos } from "@providers"
import { Helmet } from "react-helmet"
import { Button } from "react-felix-ui";
import { Link } from "react-router-dom";

const Explore = () => {
    const { VideoState: { trending, documentary, gardening } } = useVideos()
    const settings = {
        swipeToSlide: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };


    return (
        <>
            <Helmet>
                <title>Explore | Felix TV</title>
            </Helmet>
            <div className={styles.container}>
                <section >
                    <div className={styles.header}>
                        <h3>Trending now</h3>
                        <Link to="/explore/trending"><Button size="sm" variant="link" >See more</Button></Link>
                    </div>
                    <Slider {...settings}>
                        {
                            trending.length !== 0
                                ? trending.map((item, i) => {
                                    return <VideoCard
                                        key={i}
                                        videoItem={item}
                                        className={styles.video_card}
                                    />
                                })
                                : [...Array(7)].map((_, i) => {
                                    return <VideoCard key={i} isLoading={true} />
                                })
                        }
                    </Slider>
                </section>
                <section >
                    <div className={styles.header}>
                        <h3>Documentaries</h3>
                        <Link to="/explore/documentaries"><Button size="sm" variant="link" >See more</Button></Link>
                    </div>
                    <Slider {...settings}>
                        {
                            documentary.length !== 0
                                ? documentary.map((item, i) => {
                                    return <VideoCard
                                        key={i}
                                        videoItem={item}
                                        className={styles.video_card}
                                    />
                                })
                                : [...Array(7)].map((_, i) => {
                                    return <VideoCard key={i} isLoading={true} />
                                })
                        }
                    </Slider>
                </section>
                <section >
                    <div className={styles.header}>
                        <h3>Basic Gardening</h3>
                        <Link to="/explore/basic-gardening"><Button size="sm" variant="link" >See more</Button></Link>
                    </div>
                    <Slider {...settings}>
                        {
                            gardening.length !== 0
                                ? gardening.map((item, i) => {
                                    return <VideoCard
                                        key={i}
                                        videoItem={item}
                                        className={styles.video_card}
                                    />
                                })
                                : [...Array(7)].map((_, i) => {
                                    return <VideoCard key={i} isLoading={true} />
                                })
                        }
                    </Slider>
                </section>
            </div>
        </>
    )
}

export default Explore