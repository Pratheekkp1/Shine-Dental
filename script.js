document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealSection);
  revealSection();
});

// Floating "Schedule Now" button scrolls to the form
document.getElementById('floatingScheduleBtn').addEventListener('click', () => {
  document.getElementById('schedule-form').scrollIntoView({ behavior: 'smooth', block: 'center' });
  document.getElementById('name').focus();
});

// Simple form submission handler (no backend, just shows a thank you)
document.getElementById('schedule-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('schedule-success').style.display = 'block';
  this.reset();
});