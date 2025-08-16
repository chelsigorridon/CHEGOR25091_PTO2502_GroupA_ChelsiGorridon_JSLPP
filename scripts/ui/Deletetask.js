import { loadTasksFromStorage } from "../utils/localStorage";

/** 
 * Keeps track of the ID of the currently edited task.
 * @type {number|null}
 */
let currentTaskId = null;

/**
 * Sets up the Delete button in the task modal.
 * When clicked, asks the user for confirmation, deletes the task from localStorage,
 * removes it from the DOM, and closes the modal.
 */
export function setupDeleteTaskBtn() {
  const deleteBtn = document.getElementById("delete-task-btn");
  const overlay = document.querySelector(".modal-overlay");

  deleteBtn.addEventListener("click", async () => {
    // Ask for confirmation before deleting
    const confirmed = confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;

 /** 
     * Ask user to confirm deletion.
     * @type {boolean} confirmed
     */
   
    const tasks = await loadTasksFromStorage();

    // Filter out the task being deleted
    const updatedTasks = tasks.filter((task) => task.id != currentTaskId);

    // Save updated tasks back to localStorage
    saveTasksToStorage(updatedTasks);

    // Remove task element from the DOM
    const taskEl = document.querySelector(`.task-div[data-id='${currentTaskId}']`);
    if (taskEl && taskEl.parentElement) {
      taskEl.parentElement.removeChild(taskEl);
    }

    // Close the modal
    overlay.classList.remove("active");

    // Clear currentTaskId
    currentTaskId = null;
  });
}    
console.log("Delete task button setup complete.");