import { RevealWrapper } from 'next-reveal'

export default function DiscountSection() {
    return (
        <section className="discount section">
            <div className="discount__container container grid">
                <RevealWrapper delay={600} distance='60px' duration={2500} origin="left" interval={100} className="discount__animate">
                    <h2 className="discout__title">
                        Immerse yourself in <br></br> your music
                    </h2>
                    <p className="discout__description">
                        Get it now, up to 50% off
                    </p>
                    <a href="#" className="button button--flex">
                        <i className="ri-shopping-bag-line button__icon"></i> Shop Now
                    </a>
                </RevealWrapper>
                <RevealWrapper delay={600} distance='60px' duration={2500} origin="right">
                    <img src="https://i.ibb.co/0y4KpWx/discount.png" alt="" className="discount__img" />
                </RevealWrapper>

            </div>
        </section>
    )
}
