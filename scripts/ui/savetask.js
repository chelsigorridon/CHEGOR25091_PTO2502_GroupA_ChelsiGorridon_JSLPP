import {
  saveTasksToStorage,
} from "../utils/localStorage.js";


let currentTaskId = null; // Make sure you set this when opening the modal

export function saveTaskBtn() {
  const titleInput = document.getElementById("title-input");
  const descInput = document.getElementById("desc-input");
  const statusSelect = document.getElementById("select-status");
  const saveBtn = document.getElementById("save-task-btn");
  const overlay = document.querySelector(".modal-overlay");

  saveBtn.addEventListener("click", async () => {
    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    const status = statusSelect.value;

    if (!title) return alert("Title cannot be empty!");

    // Load tasks from localStorage
    const tasks = await loadTasksFromStorageOrAPI();
    const taskIndex = tasks.findIndex((t) => t.id == currentTaskId);

    if (taskIndex > -1) {
      // Update task in the array
      tasks[taskIndex].title = title;
      tasks[taskIndex].description = description;
      tasks[taskIndex].status = status;

      // Save back to localStorage
      saveTasksToStorage(tasks);

      // Update the task element on the board
      updateTaskOnBoard(currentTaskId, { title, description, status });

      // Close the modal
      overlay.classList.remove("active"); // assuming this hides modal
    }
  });
}

// Updates the DOM for the task without reloading
function updateTaskOnBoard(taskId, { title, description, status }) {
  const taskEl = document.querySelector(`.task-div[data-id='${taskId}']`);
  if (taskEl) {
    taskEl.querySelector(".task-title").textContent = title;
    taskEl.querySelector(".task-desc").textContent = description;

    // Move task to the correct column if status changed
    const newColumn = document.querySelector(`.column-div[data-status='${status}'] .tasks-container`);
    if (newColumn && taskEl.parentElement !== newColumn) {
      newColumn.appendChild(taskEl);
    }
  }
}