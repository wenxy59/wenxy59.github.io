// main.js — Xiangyu Wen Academic Homepage (content is static; this handles nav UX)

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id], [id="awards"]');
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    let current = '';
    document.querySelectorAll('[id]').forEach(sec => {
      if (sec.offsetTop && window.scrollY >= sec.offsetTop - 110) current = sec.id;
    });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 500), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initBackToTop();
});
