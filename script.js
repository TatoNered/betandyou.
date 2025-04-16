document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((el) => observer.observe(el));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const zoomElements = document.querySelectorAll(".zoom-on-scroll");

  if (zoomElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    zoomElements.forEach((el) => observer.observe(el));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  try {
    const animatedItems = document.querySelectorAll(
      ".fade-in, .slide-in, .slide-up, .zoom-in"
    );

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    animatedItems.forEach((item) => observer.observe(item));
  } catch (e) {}
});
document.addEventListener("DOMContentLoaded", function () {
  try {
    const cards = document.querySelectorAll(".mobile-platform-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("card-visible");
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));
  } catch (e) {}
});
document.addEventListener("DOMContentLoaded", function () {
  try {
    const animatedSections = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".advantage-item");
            items.forEach((item) => item.classList.add("rotate-in", "visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    animatedSections.forEach((section) => observer.observe(section));
  } catch (e) {}
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const msg = document.getElementById("reg-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "";
    msg.className = "reg-msg";

    const name = document.getElementById("reg-name").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const pass = document.getElementById("reg-pass").value;
    const confirm = document.getElementById("reg-pass-confirm").value;
    const currency = document.getElementById("reg-currency").value;
    const agree = document.getElementById("reg-agree").checked;

    if (!name || !email || !pass || !confirm || !currency || !agree) {
      msg.textContent = "Iltimos, barcha maydonlarni to‘ldiring.";
      msg.classList.add("error");
      return;
    }

    if (pass !== confirm) {
      msg.textContent = "Parollar mos emas.";
      msg.classList.add("error");
      return;
    }

    const user = {
      name,
      email,
      pass,
      currency,
      date: new Date().toISOString(),
    };

    try {
      localStorage.setItem("betandyou_user", JSON.stringify(user));
      msg.textContent = "Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!";
      msg.classList.remove("error");
      form.reset();
    } catch (_) {
      msg.textContent = "Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.";
      msg.classList.add("error");
    }
  });
});
const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("mainNav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const langBtn = document.getElementById("langSwitchBtn");

const isRussian = window.location.pathname.includes("index-ru.html");

langBtn.textContent = isRussian ? "🇺🇿 O‘zbekcha" : "🇷🇺 Русский";

langBtn.addEventListener("click", () => {
  const newLocation = isRussian ? "index.html" : "index-ru.html";
  window.location.href = newLocation;
});
