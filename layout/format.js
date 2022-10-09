import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function formate() {

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <a className="scrollup" id="scroll-up" onClick={scrollToTop}>
        <i className="ri-arrow-up-s-line scrollup__icon"></i>
      </a>
    </div>
  )
}
