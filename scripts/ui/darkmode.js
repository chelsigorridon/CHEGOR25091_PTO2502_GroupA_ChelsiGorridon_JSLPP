/**
 * Dark Mode Toggle Script
 * 
 * Handles toggling between light and dark mode, 
 * and saves the user's preference in localStorage.
 */

  document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const label = document.getElementById("theme-label");

/**
   * Load the saved theme from localStorage
   * and apply it to the document body.
   */

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
    label.textContent = "☀️";
     label.textContent = "🌑";
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});

console.log("Dark mode script loaded successfully.");