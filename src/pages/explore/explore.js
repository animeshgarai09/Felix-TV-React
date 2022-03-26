import styles from "./explore.module.scss"
import { VideoCard } from "@components"
import Slider from "react-slick";
const Explore = () => {
    const settings = {
        swipeToSlide: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className={styles.container}>
            <section >
                <h3>Trending now</h3>
                <Slider {...settings}>
                    {
                        [...Array(8)].map((_, i) => {
                            return <VideoCard key={i} />
                        })
                    }
                </Slider>
            </section>
            <section >
                <h3>Trending now</h3>
                <Slider {...settings}>
                    {
                        [...Array(8)].map((_, i) => {
                            return <VideoCard key={i} />
                        })
                    }
                </Slider>
            </section>
            <section >
                <h3>Trending now</h3>
                <Slider {...settings}>
                    {
                        [...Array(8)].map((_, i) => {
                            return <VideoCard key={i} />
                        })
                    }
                </Slider>
            </section>
            <section >
                <h3>Trending now</h3>
                <Slider {...settings}>
                    {
                        [...Array(8)].map((_, i) => {
                            return <VideoCard key={i} />
                        })
                    }
                </Slider>
            </section>
        </div>
    )
}

export default Explore