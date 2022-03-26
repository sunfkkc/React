import React, { useState } from 'react'
import styles from './Header.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiRun } from 'react-icons/bi'
function Header() {
    const [menu, setMenu] = useState(false)
    const onClick = function (e) {
        setMenu(!menu)
    }
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <div id='menu' className={styles.hamburger} onClick={onClick}><AiOutlineMenu size='24' /></div>

                </div>

            </div >

            {menu ? (
                <Mobilemenu />
            ) : (<></>)}
        </div>
    )
}

export default Header

function Mobilemenu() {
    return (
        <div className={styles.mobilemenu}>
            <li><span><BiRun /></span> 마이 러닝</li>

        </div>
    )
}