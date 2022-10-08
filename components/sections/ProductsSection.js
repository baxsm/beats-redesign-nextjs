import React from 'react'

export default function ProductsSection() {
    return (
        <section className="products section" id="products">
            <h2 className="section__title section__title-gradient products__line">
                Choose <br></br> Your Style
            </h2>
            <div className="products__container container grid">
                <article className="products__card">
                    <div className="products__content">
                        <img src="https://i.ibb.co/Kr56DZX/product1.png" alt="" className="products__img" />
                        <h3 className="products__title">Black</h3>
                        <span className="products__price">$249</span>
                        <button className="button button--flex products__button">
                            <i className="ri-shopping-bag-line button__icon"></i>
                        </button>
                    </div>
                </article>
                <article className="products__card">
                    <div className="products__content">
                        <img src="https://i.ibb.co/jTf3Pxw/product2.png" alt="" className="products__img" />
                        <h3 className="products__title">Red Black</h3>
                        <span className="products__price">$249</span>
                        <button className="button button--flex products__button">
                            <i className="ri-shopping-bag-line button__icon"></i>
                        </button>
                    </div>
                </article>
                <article className="products__card">
                    <div className="products__content">
                        <img src="https://i.ibb.co/6cSVVD3/product3.png" alt="" className="products__img" />
                        <h3 className="products__title">Night Black</h3>
                        <span className="products__price">$249</span>
                        <button className="button button--flex products__button">
                            <i className="ri-shopping-bag-line button__icon"></i>
                        </button>
                    </div>
                </article>
                <article className="products__card">
                    <div className="products__content">
                        <img src="https://i.ibb.co/5LSYpWr/product4.png" alt="" className="products__img" />
                        <h3 className="products__title">Blue</h3>
                        <span className="products__price">$249</span>
                        <button className="button button--flex products__button">
                            <i className="ri-shopping-bag-line button__icon"></i>
                        </button>
                    </div>
                </article>
                <article className="products__card">
                    <div className="products__content">
                        <img src="https://i.ibb.co/JBBWrzW/product5.png" alt="" className="products__img" />
                        <h3 className="products__title">Twilight gray</h3>
                        <span className="products__price">$249</span>
                        <button className="button button--flex products__button">
                            <i className="ri-shopping-bag-line button__icon"></i>
                        </button>
                    </div>
                </article>
            </div>
        </section>
    )
}
