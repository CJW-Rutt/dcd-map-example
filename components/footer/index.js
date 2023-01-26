/**
 * @author      Corey J. Rutt
 * @version     1.0
 * 
 * @description A function for placing the footer component on pages.
 * @returns     The footer for the webpage.
 */

import Link from 'next/link'
import styles from '../../styles/Component.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <img className={styles.footer_logo} src="/logoalt1.png" />
                    <div className={styles.footer_links}>
                        <Link href="/">Courses</Link>
                        <Link href="about">About</Link>
                    </div>
                </div>
                <p>© 2023 CRIT.com, All Rights Reserved.</p>
            </footer>
        </>
    )
}