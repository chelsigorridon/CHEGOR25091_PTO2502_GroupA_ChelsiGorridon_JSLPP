import { saveTasksToStorage } from "./utils/localStorage.js";
import { loadTasksFromAPIOrStorage } from "./utils/fetchingApi.js";
import { setupModalCloseHandler, setupNewTaskModalHandler } from "./ui/modalHandlers.js";
import './ui/hidenavbar.js'; 
import './ui/darkmode.js';
import { saveTaskBtn } from "./ui/savetask.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import { setupNavModal } from "./ui/mediaqmodal.js";



async function initTaskBoard() {
  clearExistingTasks();

  // Load tasks from API first, fallback to localStorage/initialTasks
  const tasks = await loadTasksFromAPIOrStorage();

  // Render tasks
  renderTasks(tasks);

  // Save loaded tasks to localStorage so next load has data
  saveTasksToStorage(tasks);

  // Setup UI handlers
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  saveTaskBtn();
  setupNavModal()
  
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
