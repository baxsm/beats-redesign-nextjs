import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { navLinks } from './_child/NavLinks';

export default function Header() {

    const [activeLink, setActiveLink] = useState('#home');

    const [navMenuActive, setNavMenuActive] = useState(null);

    const handleClick = (href) => {
        setActiveLink(href);
        setNavMenuActive(null);
    }

    const navOpen = () => {
        setNavMenuActive('show');
    }

    const navClose = () => {
        setNavMenuActive(null);
    }

    useEffect(() => {
        document.querySelectorAll('.nav__list a').forEach(e => {
            e.addEventListener('click', () => {
                document.querySelector('' + e.getAttribute('data-href')).scrollIntoView();
            });
        });
    }, [])

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <img src="https://i.ibb.co/kDTwh5q/logo.png" alt="" />
                </a>
                <div className={navMenuActive ? 'nav__menu show-menu' : 'nav__menu'} id="nav-menu">
                    <ul className="nav__list">
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <li className="nav__item" key={index}>
                                        <a data-href={link.path} className={activeLink == link.path ? 'active-link nav__link' : 'nav__link'} onClick={() => handleClick(link.path)}>{link.name}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className="nav__close" id="nav-close">
                        <i className="ri-close-line" onClick={navClose}></i>
                    </div>
                </div>
                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-function-line" onClick={navOpen}></i>
                </div>
            </nav>
        </header>
    )
}
