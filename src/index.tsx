import "./style.css";
import "./chat.css"
import "./rwd.css"
document.addEventListener("DOMContentLoaded", () => {
  const heroTexts = document.querySelectorAll('.h1first, .h1second');

  // 1️⃣ Sahifa yuklanganda animatsiya
  heroTexts.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 300);
  });

  // 2️⃣ Scroll trigger (Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 10.5 }); // matn 50% ko‘rinanda ishlaydi

  heroTexts.forEach(el => observer.observe(el));
});





console.log('JS ishlayapti');