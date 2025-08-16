
/**
 * Creates a DOM element representing a single task.
 * @param {Object} task - The task object.
 * @param {number|string} task.id - Unique identifier for the task.
 * @param {string} task.title - Title of the task.
 * @param {string} [task.description] - Optional description of the task.
 * @param {string} [task.status] - Optional status of the task (e.g., "To Do", "Doing", "Done").
 * @returns {HTMLDivElement} The DOM element for the task, with click handler to open the task modal.
 */

import { openTaskModal } from "./modalHandlers.js";

export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}
