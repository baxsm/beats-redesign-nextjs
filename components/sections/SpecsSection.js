import { RevealWrapper } from 'next-reveal';

export default function SpecsSection() {
    return (
        <section className="specs section grid" id="specs">
            <RevealWrapper delay={600} distance='60px' duration={2500} origin="bottom">
                <h2 className="section__title section__title-gradient">Specs</h2>
            </RevealWrapper>

            <div className="specs__container container grid">
                <div className="specs__content grid">
                    <RevealWrapper delay={600} distance='60px' duration={2500} origin="left" interval={100} className="specs__data">
                        <i className="ri-bluetooth-line specs__icon"></i>
                        <h3 className="specs__title">Connection</h3>
                        <span className="specs__subtitle">Bluetooth v5.2</span>
                    </RevealWrapper>
                    <RevealWrapper delay={600} distance='60px' duration={2500} origin="left" interval={100} className="specs__data">
                        <i className="ri-battery-charge-line specs__icon"></i>
                        <h3 className="specs__title">Battery</h3>
                        <span className="specs__subtitle">Duration 40h</span>
                    </RevealWrapper>
                    <RevealWrapper delay={600} distance='60px' duration={2500} origin="left" interval={100} className="specs__data">
                        <i className="ri-plug-line specs__icon"></i>
                        <h3 className="specs__title">Load</h3>
                        <span className="specs__subtitle">Fast charge 4.2-AAC</span>
                    </RevealWrapper>
                    <RevealWrapper delay={600} distance='60px' duration={2500} origin="left" interval={100} className="specs__data">
                        <i className="ri-mic-line specs__icon"></i>
                        <h3 className="specs__title">Microphone</h3>
                        <span className="specs__subtitle">Supports Apple Siri <br></br> and Google</span>
                    </RevealWrapper>
                </div>
                <RevealWrapper delay={600} distance='60px' duration={2500} origin="right" className="specs__data">
                    <img src="https://i.ibb.co/hmRK2yr/specs.png" alt="" className="specs__img" />
                </RevealWrapper>
            </div>
        </section>
    )
}
