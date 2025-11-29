// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Skill bars animation
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll(".skill-progress");
      skillBars.forEach((bar) => {
        const progress = bar.getAttribute("data-progress");
        bar.style.width = progress + "%";
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const skillsSection = document.querySelector(".skills");
if (skillsSection) {
  skillObserver.observe(skillsSection);
}

// Form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("¡Gracias por tu mensaje! Te contactaré pronto.");
  e.target.reset();
});

// Project cards hover effect
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    alert(
      "Aquí podrías agregar un enlace al proyecto o abrir un modal con más detalles"
    );
  });
});
