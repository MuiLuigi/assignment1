"use client"
import Link from 'next/link'
import styles from "../page.module.css";

function Navigation() {
    //This is the navigation bar to take the user to the different pages.
    return (
        <nav className={styles.nav}>
            <Link href="/">Homepage</Link>
            <Link href="/aboutPage">About Us</Link>
            <Link href="/contactPage">Contact Us</Link>
        </nav>
    )
}

export default Navigation;