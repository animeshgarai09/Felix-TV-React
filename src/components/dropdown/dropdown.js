import styles from "./dropdown.module.scss"
import { cloneElement, forwardRef } from "react"
import { useClickOutside } from '@mantine/hooks';

const DropDownMenu = forwardRef(({ children, className, onClickClose }) => {
    const dropdownRef = useClickOutside(onClickClose)

    return (
        <div ref={dropdownRef} className={`${className} ${styles.container} `}>
            <ul>
                {children.map((child, i) => {
                    return cloneElement(child, { onClickClose: onClickClose, key: i })
                })}
            </ul>
        </div>
    )
})

const DropDownItem = ({ onClick, onClickClose, className, children }) => {
    return (
        <li className={className} onClick={() => { onClick && onClick(); onClickClose(); }}>{children}</li>
    )
}

export { DropDownMenu, DropDownItem }

