(() => {
  'use strict';

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('global-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'メニューを開く');
        document.body.style.overflow = '';
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'メニューを開く');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }
})();
