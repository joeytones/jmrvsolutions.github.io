AOS.init({ duration: 1000, once: true });

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = 'block';
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
