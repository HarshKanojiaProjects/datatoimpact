// Gentle fade-in on load
document.body.style.opacity = 0;

window.addEventListener("load", () => {
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = 1;
});
