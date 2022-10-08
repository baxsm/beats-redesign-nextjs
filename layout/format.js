import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function formate() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-s-line scrollup__icon"></i>
      </a>
    </div>
  )
}
