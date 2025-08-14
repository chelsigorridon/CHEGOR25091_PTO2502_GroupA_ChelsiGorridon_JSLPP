const toggleBtn = document.getElementById("dark-mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

 
  if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
});


window.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("dark-mode") === "enabled"){
    document.body.classList.add("dark-mode");
  }
});