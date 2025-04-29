import React from 'react'
import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import styles from '@/components/main-header/Main-Header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './Main-Header-Background'
import NavLink from './nav-link'

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={ logoImg } alt="A plate with food on it" priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )   
}
