/**
 * Sets up the close button for the task modal.
 * Clicking the close button will close the task modal.
 */

import { addNewTask } from "../tasks/taskManager.js";

export function setupModalCloseHandler() {
  
  /** @type {HTMLDialogElement} Task modal element */

  const modal = document.getElementById("task-modal");
  /** @type {HTMLElement} Close button inside the task modal */

  const closeBtn = document.getElementById("close-modal-btn");

  closeBtn.addEventListener("click", () => modal.close());
}


/**
 * Sets up the "Add New Task" modal and its form handlers.
 * Handles opening the modal, cancelling, and submitting the form.
 */

export function setupNewTaskModalHandler() {
  const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const form = document.querySelector(".modal-window");
  const cancelBtn = document.getElementById("cancel-add-btn");

  newTaskBtn.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  cancelBtn.addEventListener("click", () => overlay.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      addNewTask();
    } else {
      form.reportValidity();
    }
  });
}

export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;
  modal.showModal();
}

console.log("modalHandler.js loaded successfully.");


