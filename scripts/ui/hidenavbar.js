const sidebar = document.getElementById("side-bar-div");
const toggleBtn = document.getElementById("sidebar-toggle");

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