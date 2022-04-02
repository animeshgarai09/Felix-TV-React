import styles from "./video-embed.module.scss"
import { ReactComponent as Spinner } from "@assets/svg/spinner.svg"
const VideoEmbed = ({ embedId }) => {
    return (
        <div className={styles.container}>
            <Spinner className="spinner animationSpin" />
            <iframe
                width="853"
                height="380"
                src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}

export default VideoEmbed