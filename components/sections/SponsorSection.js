import { RevealList } from 'next-reveal';

export default function SponsorSection() {
    return (
        <section className="sponsor section">
            <RevealList delay={600} distance='60px' duration={2500} origin="top" interval={100} className="sponsor__container container grid">
                <img src="https://i.ibb.co/9nsDYfs/sponsor1.png" alt="" className="sponsor__img" />
                <img src="https://i.ibb.co/nzfN5Qd/sponsor2.png" alt="" className="sponsor__img" />
                <img src="https://i.ibb.co/6nkL1G2/sponsor3.png" alt="" className="sponsor__img" />
                <img src="https://i.ibb.co/j6n9pwJ/sponsor4.png" alt="" className="sponsor__img" />
            </RevealList>
        </section>
    )
}
