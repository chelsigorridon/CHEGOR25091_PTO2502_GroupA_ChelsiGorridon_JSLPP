import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import { setupModalCloseHandler, setupNewTaskModalHandler } from "./ui/modalHandlers.js";
import { saveTaskBtn, updateTaskOnBoard} from "./ui/savetask.js";
import './ui/hidenavbar.js'; 
import './ui/darkmode.js';
import { loadTasksFromStorageOrAPI,saveTasksToStorage } from "./utils/fetchingApi.js";
import {setupDeleteTaskBtn} from "./ui/deletetask.js";


function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  saveTaskBtn();
  updateTaskOnBoard();
  loadTasksFromStorageOrAPI();
  saveTasksToStorage();
  setupDeleteTaskBtn();


}

document.addEventListener("DOMContentLoaded", initTaskBoard);
