/**
 * @author      Corey J. Rutt
 * @version     1.0
 * 
 * @description A function for placing the header component on pages.
 * @returns     The header for the webpage.
 */

import Link from 'next/link'
import styles from '../../styles/Component.module.css'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <img className='' src="" />
                <div>
                    <Link href="/">Courses</Link>
                    <Link href="about">About</Link>
                </div>
            </header>
        </>
    )
}