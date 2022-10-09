import { useEffect } from "react";
import Format from "../layout/format";

export default function Home() {

  useEffect(function mount() {
    const sections = document.querySelectorAll('section[id]');
    const header = document.getElementById('header');
    const scrollUpButton = document.getElementById('scroll-up');

    function onScroll() {
      const scrollY = window.scrollY;

      // dynamic nav on scroll
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

      // header fadein / fadeout
      if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
      }
      else {
        header.classList.remove('scroll-header');
      }

      // scroll to top fadein / fadeout
      if (this.scrollY >= 200) {
        scrollUpButton.classList.add('show-scroll');
      }
      else {
        scrollUpButton.classList.remove('show-scroll');
      }

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
