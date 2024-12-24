'use strict';
{
  document.addEventListener('DOMContentLoaded', () => {
    // header
    // back-top
    const headerInner = document.querySelector('.js-header__inner');
    const backTop = document.querySelector('.js-back-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        headerInner.classList.add('is-active');
        backTop.classList.add('is-active');

      } else {
        headerInner.classList.remove('is-active');
        backTop.classList.remove('is-active');
      }
    });

    backTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('js-anim-fadeUpTrigger')) {
            entry.target.classList.add('anim-fadeUp');
            observer.unobserve(entry.target);
          }
          if (entry.target.classList.contains('js-anim-slideUpTrigger')) {
            entry.target.classList.add('anim-slideUp');
            observer.unobserve(entry.target);
          }
        }
      });
    },
      { threshold: 0.2 }
    );

    const fadeUps = document.querySelectorAll('.js-anim-fadeUpTrigger');
    fadeUps.forEach(fadeUp => observer.observe(fadeUp));

    const slideUps = document.querySelectorAll('.js-anim-slideUpTrigger');
    slideUps.forEach(slideUp => observer.observe(slideUp));

    // swiper
    const swiper = new Swiper('.swiper', {
      cssMode: true,
      loop: true,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // trainer
    const tabLinks = document.querySelectorAll('.js-trainer__tab-link');
    const tabContents = document.querySelectorAll('.js-trainer__content');
    tabLinks.forEach(button => {
      button.addEventListener('click', () => {
        tabLinks.forEach(tabLink => tabLink.classList.remove('is-active'));
        button.classList.add('is-active');

        tabContents.forEach(content => content.classList.remove('is-active'));
        document.getElementById(button.dataset.id).classList.add('is-active');
      });
    });

    // faq
    const faqTitles = document.querySelectorAll('.js-faq__tab-title');

    faqTitles.forEach(button => {
      button.addEventListener('click', (event) => {
        const faqItems = button.closest('.js-faq__tab-item');
        faqItems.classList.toggle('is-active');

        faqTitles.forEach(otherButton => {
          const otherItem = otherButton.closest('.js-faq__tab-item');
          if (otherItem !== faqItems) {
            otherItem.classList.remove('is-active');
          }
        });

        event.stopPropagation();
      });
    });

    document.addEventListener('click', () => {
      const activeItems = document.querySelectorAll('.js-faq__tab-item.is-active');
      activeItems.forEach(activeItem => {
        activeItem.classList.remove('is-active');
      });
    });

  });
}
