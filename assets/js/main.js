(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      menuBtn.textContent = isOpen ? "✕" : "☰";
    });
  }

  // Desktop dropdown (People) - click to toggle for accessibility
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const expanded = btn.getAttribute("aria-expanded") === "true";
      // close others
      dropdownToggles.forEach((b) => b.setAttribute("aria-expanded", "false"));
      btn.setAttribute("aria-expanded", String(!expanded));
    });
  });

  // close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const target = e.target;
    const inside = target && target.closest && target.closest(".has-dropdown");
    if (!inside) {
      dropdownToggles.forEach((b) => b.setAttribute("aria-expanded", "false"));
    }
  });

  // Mobile People accordion
  const accordion = document.querySelector(".mobile-accordion");
  const mobilePeople = document.getElementById("mobilePeople");

  if (accordion && mobilePeople) {
    accordion.addEventListener("click", () => {
      const expanded = accordion.getAttribute("aria-expanded") === "true";
      accordion.setAttribute("aria-expanded", String(!expanded));
      mobilePeople.classList.toggle("open");
    });
  }
})();

// Click-to-zoom lightbox for images with class "lightbox-img"
(function initLightbox(){
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  const img = document.createElement("img");
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function open(src, alt){
    img.src = src;
    img.alt = alt || "";
    overlay.classList.add("active");
  }
  function close(){
    overlay.classList.remove("active");
    img.src = "";
  }

  overlay.addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") close(); });

  document.querySelectorAll(".lightbox-img").forEach(el => {
    el.addEventListener("click", () => open(el.src, el.alt));
  });
})();