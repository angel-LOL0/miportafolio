const body = document.body;
const btn = document.getElementById("themeBtn");

// 1. Revisar si hay un tema guardado
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.toggle("dark", savedTheme === "dark");
} else {
  // 2. Si no hay nada guardado, usar el tema del sistema
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) body.classList.add("dark");
}

// 3. Botón para cambiar el tema
btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
});

/* ============================
       ANIMACIONES AL SCROLL
    ============================ */
const reveals = document.querySelectorAll(".reveal");

const revealScroll = () => {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("visible");
  });
};

window.addEventListener("scroll", revealScroll);
window.addEventListener("load", revealScroll);
