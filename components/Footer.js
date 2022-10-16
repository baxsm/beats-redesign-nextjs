import { RevealList } from 'next-reveal';

export default function Footer() {
    return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <RevealList delay={600} distance='60px' duration={2500} origin="top" interval={100}>
                    <a href="#" className="footer__logo">
                        <img src="https://i.ibb.co/kDTwh5q/logo.png" alt="" />
                    </a>
                </RevealList>
                <RevealList delay={600} distance='60px' duration={2500} origin="top" interval={100} className="footer__content">
                    <h3 className="footer__title">Products</h3>
                    <ul className="footer__links">
                        <li>
                            <a className="footer__link">Headphones</a>
                        </li>
                        <li>
                            <a className="footer__link">Earphones</a>
                        </li>
                        <li>
                            <a className="footer__link">Earbuds</a>
                        </li>
                        <li>
                            <a className="footer__link">Accesories</a>
                        </li>
                    </ul>
                </RevealList>
                <RevealList delay={600} distance='60px' duration={2500} origin="top" interval={100} className="footer__content">
                    <h3 className="footer__title">Support</h3>
                    <ul className="footer__links">
                        <li>
                            <a className="footer__link">Product Help</a>
                        </li>
                        <li>
                            <a className="footer__link">Register</a>
                        </li>
                        <li>
                            <a className="footer__link">Updates</a>
                        </li>
                        <li>
                            <a className="footer__link">Provides</a>
                        </li>
                    </ul>
                </RevealList>
                <RevealList delay={600} distance='60px' duration={2500} origin="top" interval={100} className="footer__content">
                    <form action="" className="footer__form">
                        <input type="email" placeholder="Email" className="footer__input" />
                        <button className="button button--flex">
                            <i className="ri-send-plane-line button__icon"></i> Subscribe
                        </button>
                    </form>
                    <div className="footer__social">
                        <a href="https://facebook.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                            <i className="ri-facebook-fill"></i>
                        </a>
                        <a href="https://instagram.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                            <i className="ri-twitter-line"></i>
                        </a>
                    </div>
                </RevealList>
            </div>
            <RevealList delay={600} distance='60px' duration={2500} origin="top" interval={100}>
                <p className="footer__copy">
                    <a href="https://github.com/baxsm" className="footer__copy-link" target="_blank" rel="noreferrer">
                        &#169; BAXSM. All Rights Reserved
                    </a>
                </p>
            </RevealList>
        </footer>
    )
}
