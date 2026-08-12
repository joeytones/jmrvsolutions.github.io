(() => {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let stars = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.round((width * height) / 6000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.3,
      baseAlpha: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
      driftSpeed: Math.random() * 0.05 + 0.01
    }));
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);
    for (const star of stars) {
      star.y += star.driftSpeed;
      if (star.y > height) star.y = 0;
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(138, 235, 255, ${Math.max(0, star.baseAlpha + twinkle)})`;
      ctx.fill();
    }
    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);
})();

(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  if (prefersReducedMotion || !hasFinePointer) return;

  const canvas = document.getElementById('cursorFx');
  const ctx = canvas.getContext('2d');

  let width, height;
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const target = { x: width / 2, y: height / 2 };
  const glow = { x: target.x, y: target.y };
  let active = false;
  const trail = [];
  const maxTrailPoints = 24;

  window.addEventListener('mousemove', (e) => {
    target.x = e.clientX;
    target.y = e.clientY;
    active = true;
  });

  window.addEventListener('mouseleave', () => {
    active = false;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    if (active) {
      glow.x += (target.x - glow.x) * 0.15;
      glow.y += (target.y - glow.y) * 0.15;

      trail.push({ x: glow.x, y: glow.y, age: 0 });
      if (trail.length > maxTrailPoints) trail.shift();

      for (const point of trail) {
        const lifeRatio = 1 - point.age / maxTrailPoints;
        const radius = lifeRatio * 4;
        ctx.beginPath();
        ctx.arc(point.x, point.y, Math.max(radius, 0), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 235, 255, ${lifeRatio * 0.35})`;
        ctx.fill();
        point.age += 1;
      }

      const gradient = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, 60);
      gradient.addColorStop(0, 'rgba(138, 235, 255, 0.25)');
      gradient.addColorStop(1, 'rgba(138, 235, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(glow.x, glow.y, 60, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
})();

const menuToggle = document.getElementById('menuToggle');
const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
  menuIcon.textContent = isOpen ? 'menu' : 'close';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    menuIcon.textContent = 'menu';
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
});

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};
scrollTopBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const emailLink = document.getElementById('emailLink');
const copyToast = document.getElementById('copyToast');
emailLink.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText('hello@jmrvsolutions.com').then(() => {
    copyToast.classList.add('show');
    setTimeout(() => copyToast.classList.remove('show'), 2000);
  });
});

const copyrightYear = document.getElementById('copyrightYear');
copyrightYear.textContent = new Date().getFullYear();
