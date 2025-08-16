import { saveTasksToStorage } from "../utils/localStorage.js";
import { loadTasksFromAPIOrStorage } from "../utils/fetchingApi.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "../tasks/formUtils.js";

/**
 * Sets up the Save button in the task modal.
 * When clicked, it reads input values from the modal,
 * creates a new task, saves it to localStorage, updates the DOM,
 * and closes the modal.
 */


export function saveTaskBtn() {
  const titleInput = document.getElementById("title-input");
  const descInput = document.getElementById("desc-input");
  const statusSelect = document.getElementById("select-status");
  const prioritySelect = document.getElementById("select-priority");
  const saveBtn = document.getElementById("save-task-btn");
  const overlay = document.querySelector(".modal-overlay");

/**
   * Handles the click event for the Save button.
   * Reads input values, validates them, creates a new task,
   * saves tasks to localStorage, updates the DOM, and closes the modal.
   */

  saveBtn.addEventListener("click", async () => {
    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    const status = statusSelect.value;
    const priority = prioritySelect.value;

    if (!title) return alert("Title cannot be empty!");

    const tasks = await loadTasksFromAPIOrStorage();

    const newTask = {
      id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
      title,
      description,
      status,
      priority
    };

    // Reset modal inputs and close moda    
    const updatedTasks = [...tasks, newTask];
    saveTasksToStorage(updatedTasks);

    clearExistingTasks();
    renderTasks(updatedTasks);
    resetForm();
    overlay.classList.remove("active");
  });
}