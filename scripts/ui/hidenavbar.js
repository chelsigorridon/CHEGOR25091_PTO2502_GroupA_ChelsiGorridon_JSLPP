/** 
 * Sidebar element in the DOM.
 * @type {HTMLElement} 
 */

const sidebar = document.getElementById("side-bar-div");
const toggleBtn = document.getElementById("sidebar-toggle");

/** 
 * Button used to toggle the sidebar visibility.
 * @type {HTMLElement} 
 */

/**
 * Initializes the sidebar toggle functionality.
 * When the toggle button is clicked, this function will hide or show the sidebar
 * and update the button text accordingly.
 */

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("side-bar-div");
  const toggleBtn = document.getElementById("sidebar-toggle");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    toggleBtn.textContent = sidebar.classList.contains("hidden") 
      ? " Show Side Bar" 
      : " Hide Side Bar";
  });
});

console.log("Hide Navbar script loaded successfully.");