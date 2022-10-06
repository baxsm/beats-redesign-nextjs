import React from 'react'

export default function Header() {

    const styles = {
        nav__logo: 'flex w-[1.5] md:w-[2rem]',
        nav__list: 'flex flex-col align-center gap-y-[1rem] md:flex-row md:gap-x-[3.5rem]',
        nav__item: '',
        nav__link: 'nav__link text-[#fff] text-h2FontSize uppercase font-[600] bg-gradient-to-b from-[#3b3e40] to-[#141515] text-[transparent] bg-clip-text hover:bg-[#fff] hover:text-[#fff] hover:bg-clip-text md:normal-case text-normalFontSize',
    }

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className={styles.nav__logo}>
                    <img src="https://i.ibb.co/kDTwh5q/logo.png" alt="" />
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item + "active-link"}>
                            <a href="#home" className={styles.nav__link}>Home</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#specs" className={styles.nav__link}>Specs</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#case" className={styles.nav__link}>Case</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#products" className={styles.nav__link}>Products</a>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close">
                        <i className="ri-close-line"></i>
                    </div>
                </div>
                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>
    )
}
