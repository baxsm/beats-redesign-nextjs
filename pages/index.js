import { useEffect } from "react"
import Format from "../layout/format"

export default function Home() {

  /* 
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
      const scrollY = window.pageYOffset;
      sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          var sectionId = current.getAttribute('id');
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
          }
          else {
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
          }
      });
  }

  window.addEventListener('scroll', scrollActive);
  */

  useEffect(function mount() {
    const sections = document.querySelectorAll('section[id]');
    function onScroll() {
      const scrollY = window.pageYOffset;
      sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          var sectionId = current.getAttribute('id');
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[data-href*=' + sectionId + ']').classList.add('active-link');
          }
          else {
            document.querySelector('.nav__menu a[data-href*=' + sectionId + ']').classList.remove('active-link');
          }
      });
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <Format></Format>
  )
}
