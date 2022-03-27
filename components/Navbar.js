import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { SidebarData } from './SidebarData'
function Navbar() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = function () {
        setSidebar(!sidebar)
    }
    return (
        <>
            <div className={styles.navbar}>
                <Link to='/' className={styles.menubars}>
                    <FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? `${styles.navmenu} ${styles.active}` : styles.navmenu}>
                <ul className={styles.navmenuitems}>
                    <li className={styles.navbartoggle}>
                        <Link to='/' className={styles.menubars}>
                            <AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map(item => {
                        return (
                            <li key={item.id} className={styles.navtext}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar