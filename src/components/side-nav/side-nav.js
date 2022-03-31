import styles from "./side-nav.module.scss"
import { IconButton, List, ListItem } from "react-felix-ui"
import {
    RiPlayList2Fill,
    MdOutlineExplore,
    RiHistoryFill,
    AiOutlineClockCircle,
    HiOutlineThumbUp,
    AiFillGithub,
    AiFillTwitterCircle,
    IoLogoLinkedin,
    HiMail,
} from "@icons"
import { NavLink } from "react-router-dom"

const SideNav = () => {
    const handleActiveNav = (navigationData) => {
        return navigationData.isActive ? styles.active : ""
    }
    return (
        <aside className={styles.container}>
            <List style="none">
                <ListItem className={styles.nav_link}>
                    <NavLink className={(navigationData) => handleActiveNav(navigationData)} to="/explore"><IconButton icon={<MdOutlineExplore />} className={styles.icon} /></NavLink>
                </ListItem>
                <ListItem className={styles.nav_link}>
                    <NavLink className={(navigationData) => handleActiveNav(navigationData)} to="/playlists"><IconButton icon={<RiPlayList2Fill />} className={styles.icon} /></NavLink>
                </ListItem>
                <ListItem className={styles.nav_link}>
                    <NavLink className={(navigationData) => handleActiveNav(navigationData)} to="/watch-later"><IconButton icon={<AiOutlineClockCircle />} className={styles.icon} /></NavLink>
                </ListItem>
                <ListItem className={styles.nav_link}>
                    <NavLink className={(navigationData) => handleActiveNav(navigationData)} to="/liked-videos"><IconButton icon={<HiOutlineThumbUp />} className={styles.icon} /></NavLink>
                </ListItem>
                <ListItem className={styles.nav_link}>
                    <NavLink className={(navigationData) => handleActiveNav(navigationData)} to="/history"><IconButton icon={<RiHistoryFill />} className={styles.icon} /></NavLink>
                </ListItem>
            </List>
            <List style="none">
                <ListItem className={styles.social_link}>
                    <IconButton icon={<AiFillGithub />} className={styles.icon} />
                </ListItem>
                <ListItem className={styles.social_link}>
                    <IconButton icon={<AiFillTwitterCircle />} className={styles.icon} />
                </ListItem>
                <ListItem className={styles.social_link}>
                    <IconButton icon={<IoLogoLinkedin />} className={styles.icon} />
                </ListItem>
                <ListItem className={styles.social_link}>
                    <IconButton icon={<HiMail />} className={styles.icon} />
                </ListItem>
                {/* <ListItem className={styles.nav_link}>
                    <IconButton icon={<RiHistoryFill />} className={styles.icon} />
                </ListItem> */}
            </List>
        </aside>
    )
}

export default SideNav