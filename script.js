// highlight the active nav link while scrolling
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('nav a');
  const fromTop = window.scrollY + 90;

  sections.forEach(sec => {
    const link = document.querySelector(`nav a[href="#${sec.id}"]`);
    if (!link) return;
    if (sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
