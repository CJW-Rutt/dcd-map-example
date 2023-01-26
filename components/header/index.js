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
                <div className={styles.header_container}>
                    <Link href="/"><img className={styles.header_logo} src="/logoalt1.png" /></Link>
                    <div className={styles.header_links}>
                        <Link href="/">Courses</Link>
                        <Link href="about">About</Link>
                    </div>
                </div>
            </header>
        </>
    )
}