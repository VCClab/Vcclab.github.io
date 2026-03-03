(() => {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if (btn && menu) {
    btn.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.textContent = isOpen ? "✕" : "☰";
    });
  }
})();