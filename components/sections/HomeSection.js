import React from 'react'
import { RevealWrapper } from 'next-reveal'

export default function HomeSection() {

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <RevealWrapper delay={900} distance='60px' duration={2500} origin="top">
                    <img className='home__img' src="https://i.ibb.co/dBbJ4vJ/home.png" alt="" />
                </RevealWrapper>
                <div className="home__data">
                    <RevealWrapper delay={600} distance='60px' duration={2500} origin="bottom">
                        <div className="home__header">
                            <h1 className="home__title">On ear</h1>
                            <h2 className="home__subtitle">Beats 3</h2>
                        </div>
                    </RevealWrapper>
                    <RevealWrapper delay={700} distance='60px' duration={2500} origin="bottom" className="home__footer">
                        <h3 className="home__title-description">Overview</h3>
                        <p className="home__description">
                            Enjoy award-winning Beats sound with wireless listening freedom and a sleek,
                            streamlined design with comfortable padded earphones, delivering first-rate playback.
                        </p>
                        <a href="#" className="button button--flex">
                            <span className="button--flex">
                                <i className="ri-shopping-bag-line button__icon"></i> Add to bag
                            </span>
                            <span className="home__price">$299</span>
                        </a>
                    </RevealWrapper>

                </div>
            </div>
        </section>
    )
}
