// === Client ka WhatsApp number (country code ke saath, + ke baghair) ===
const WHATSAPP_NUMBER = "923128770339";

// Mobile menu
const btn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", open.toString());
  // Prevent body scroll when menu is open
  document.body.style.overflow = open ? 'hidden' : '';
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("open");
  btn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = '';
}));
// Close menu when clicking outside (overlay backdrop)
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !btn.contains(e.target) && menu.classList.contains("open")) {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = '';
  }
});
// Stats counter
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count; let n = 0;
    const step = Math.max(1, Math.round(end / 50));
    const t = setInterval(() => { n = Math.min(end, n + step); el.textContent = n; if (n === end) clearInterval(t); }, 25);
    io.unobserve(el);
  });
}, { threshold: .6 });
document.querySelectorAll("[data-count]").forEach(c => io.observe(c));

// Certificate lightbox
const lb = document.getElementById("lb"), lbImg = lb.querySelector("img");
document.querySelectorAll(".cert").forEach(img => img.addEventListener("click", () => { lbImg.src = img.src; lb.hidden = false; }));
lb.addEventListener("click", () => lb.hidden = true);

// Unified Escape key handler — closes both menu and lightbox
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = '';
    }
    if (!lb.hidden) lb.hidden = true;
  }
});

// Form -> WhatsApp
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const text = `Assalam o Alaikum,\nNaam: ${f.get("name")}\nPhone: ${f.get("phone")}\nCase type: ${f.get("type")}\nMasla: ${f.get("msg") || "-"}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
});

document.getElementById("yr").textContent = new Date().getFullYear();
