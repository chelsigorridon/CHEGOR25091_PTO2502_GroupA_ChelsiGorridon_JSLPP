
import { renderTasks } from "../ui/render.js";
import { loadTasksFromStorage } from "../utils/localStorage.js";


export async function fetchTasksFromApi() {
  try {
    const response = await fetch("https://jsl-kanban-api.vercel.app/");
    if (!response.ok) throw new Error("API error");
    const tasks = await response.json();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    
    return loadTasksFromStorage();
  }
}

export async function loadInitialTasks() {
  const loadingMessage = document.getElementById("loading-message");
  loadingMessage.style.display = "block";

  let tasks = loadTasksFromStorage();
  if (tasks.length === 0) {
    tasks = await fetchTasksFromApi();
  }
  loadingMessage.style.display = "none";
  renderTasks(tasks);
}
document.addEventListener("DOMContentLoaded", () => {
  loadInitialTasks();
  console.log("DOM ready, loading tasks...");
});