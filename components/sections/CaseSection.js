import { RevealWrapper } from 'next-reveal'

export default function CaseSection() {
    return (
        <section className="case section grid" id="case">
            <RevealWrapper delay={600} distance='60px' duration={2500} origin="bottom">
                <h2 className="section__title section__title-gradient">Case</h2>
            </RevealWrapper>

            <div className="case__container container grid">
                <RevealWrapper delay={600} distance='60px' duration={2500} origin="top">
                    <img src="https://i.ibb.co/1nHRXsv/case.png" alt="" className="case__img" />
                </RevealWrapper>
                <RevealWrapper delay={600} distance='60px' duration={2500} origin="top" className="case__data">
                    <p className="case__description">
                        With a comfortable and adaptable case so that you can
                        store it whenever you want, and keep your durability forever.
                    </p>
                    <a href="#" className="button button--flex">
                        <i className="ri-information-line button__icon"></i> More info
                    </a>
                </RevealWrapper>
            </div>
        </section>
    )
}
