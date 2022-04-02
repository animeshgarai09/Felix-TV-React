import styles from "./header.module.scss"
import { IconButton, List, ListItem, Avatar } from "react-felix-ui"
import { DropDownMenu, DropDownItem } from "@components"
import { MdOutlineNotificationsNone, BiSearch, BiUserCircle, MdPowerSettingsNew } from "@icons"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "@providers/auth-provider"
import { ReactComponent as Logo } from "@assets/svg/felix.svg"

const Header = () => {
    const [drop, setDrop] = useState(false)
    const { UserState, handleLogout } = useAuth();
    console.log("header")
    return (
        <header className={styles.container}>
            {/* <img src="favicon/favicon-32x32.png" alt="" /> */}
            <Link to="/"><Logo className={styles.logo} /></Link>
            <div className={styles.search__container}>
                <input type="text" placeholder="Search videos..." />
                <BiSearch />
            </div>
            <nav>
                <List style="none" orientation="horizontal" >
                    <ListItem className={styles.nav_link}>
                        <IconButton icon={<MdOutlineNotificationsNone />} ariaLabel="Notifications" className={styles.icon} />
                    </ListItem>
                    <ListItem className={styles.nav_link}>

                        {UserState._id !== ""
                            ? <div onClick={() => setDrop(prev => !prev)} className={styles.avatar} ><Avatar size="sm" name={UserState.name} /></div>
                            : <IconButton onClick={() => setDrop(prev => !prev)} icon={<BiUserCircle />} ariaLabel="Signup and signin" className={styles.icon} />
                        }

                        {UserState._id && drop &&
                            <DropDownMenu className={styles.dropdown} onClickClose={() => setDrop(false)}>
                                <Link to="/explore" onClick={() => setDrop(false)}><DropDownItem ><BiUserCircle />My profile</DropDownItem></Link>
                                <DropDownItem onClick={handleLogout} className={styles.logout}><MdPowerSettingsNew />Sign out</DropDownItem>
                            </DropDownMenu>
                        }

                        {!UserState._id && drop &&
                            <DropDownMenu className={styles.dropdown} onClickClose={() => setDrop(false)}>
                                <Link to="/signin" onClick={() => setDrop(false)}><DropDownItem >Sign In</DropDownItem></Link>
                                <Link to="/signup" onClick={() => setDrop(false)}><DropDownItem >Sign Up</DropDownItem></Link>
                            </DropDownMenu>
                        }
                    </ListItem>
                </List>
            </nav>
        </header>
    )
}

export default Header