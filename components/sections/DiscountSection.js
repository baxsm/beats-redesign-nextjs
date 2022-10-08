import React from 'react'

export default function DiscountSection() {
    return (
        <section className="discount section">
            <div className="discount__container container grid">
                <div className="discount__animate">
                    <h2 className="discout__title">
                        Immerse yourself in <br></br> your music
                    </h2>
                    <p className="discout__description">
                        Get it now, up to 50% off
                    </p>
                    <a href="#" className="button button--flex">
                        <i className="ri-shopping-bag-line button__icon"></i> Shop Now
                    </a>
                </div>
                <img src="https://i.ibb.co/0y4KpWx/discount.png" alt="" className="discount__img" />
            </div>
        </section>
    )
}
