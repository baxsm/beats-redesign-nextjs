import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { navLinks } from './_child/NavLinks';

export default function Header() {

    const styles = {
        header: 'w-full fixed top-0 left-0 bg-[transparent] z-[100]',
        nav: 'h-[3rem] flex justify-between place-items-center md:h-[calc(3rem + 1.5rem)] align-center',
        nav__logo: 'flex w-[1.5rem] md:w-[2rem]',
        nav__list: 'flex flex-col align-center gap-y-[1rem] md:flex-row md:gap-x-[3.5rem]',
        nav__item: '',
        nav__link: 'nav__link text-h2FontSize uppercase font-[600] bg-gradient-to-b from-[#3b3e40] to-[#141515] text-[transparent] bg-clip-text hover:bg-whiteColor hover:text-whiteColor hover:bg-clip-text md:normal-case text-normalFontSize',
        nav__close: 'absolute text-[1.5rem] top-[1rem] right-[1rem] text-whiteColor cursor-pointer md:hidden',
        nav__toggle: 'text-[1.2rem] text-whiteColor md:hidden',
        show__menu: 'top-0',
        active__link: 'text-whiteColor bg-clip-text',
    }

    const router = useRouter();

    return (
        <header className={styles.header} id="header">
            <nav className={styles.nav + " container"}>
                <a href="#" className={styles.nav__logo}>
                    <img src="https://i.ibb.co/kDTwh5q/logo.png" alt="" />
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className={styles.nav__list}>
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <li className={styles.nav__item} key={index}>
                                        <Link href={link.path}>
                                            <a className={styles.nav__link + " " + (router?.asPath?.split('/')[1] == link.path || "" ? styles.active__link : '').toString()}>{link.name}</a>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className={styles.nav__close} id="nav-close">
                        <i className="ri-close-line"></i>
                    </div>
                </div>
                <div className={styles.nav__toggle} id="nav-toggle">
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>
    )
}
