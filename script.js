/* =========================================================
   LES JUMELLES — script.js
   Comportement du header, révélations au défilement,
   menu mobile, et formulaire de réservation WhatsApp.
   ========================================================= */

const WHATSAPP_NUMBER = "213770189910"; // +213 770 18 99 10, format international sans "+"

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initMobileNav();
  initReveal();
  initActiveNav();
  initReservationForm();
  initMenuJumpScroll();
});

/* ---------- en-tête : fond au défilement ---------- */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- menu mobile ---------- */
function initMobileNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  header.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => header.classList.remove("is-open"));
  });
}

/* ---------- révélation au défilement ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- lien de navigation actif ---------- */
function initActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .menu-jump a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.split("#")[0] === path) {
      link.classList.add("active");
    }
  });
}

/* ---------- ancre douce pour la barre de sections du menu ---------- */
function initMenuJumpScroll() {
  document.querySelectorAll(".menu-jump a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = 110;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ---------- formulaire de réservation → WhatsApp ---------- */
function initReservationForm() {
  const form = document.querySelector("#reservation-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const guests = (data.get("guests") || "").toString().trim();
    const date = (data.get("date") || "").toString().trim();
    const time = (data.get("time") || "").toString().trim();
    const notes = (data.get("notes") || "").toString().trim();

    const lines = [
      "Bonjour Les Jumelles, je souhaite réserver une table.",
      `Nom : ${name || "-"}`,
      `Téléphone : ${phone || "-"}`,
      `Nombre de personnes : ${guests || "-"}`,
      `Date : ${date || "-"}`,
      `Heure : ${time || "-"}`,
    ];
    if (notes) lines.push(`Remarques : ${notes}`);

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener");
  });
}
