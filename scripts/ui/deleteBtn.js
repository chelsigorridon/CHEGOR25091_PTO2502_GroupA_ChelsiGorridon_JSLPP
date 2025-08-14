const modal = document.getElementById("task-modal");
const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");
const statusInput = document.getElementById("task-status");
const deleteBtn = document.getElementById("delete-task-btn");

// Example task storage
let tasks = [
  { id: 1, title: "Example Task", description: "Demo", status: "todo" }
];
let currentTaskId = 1;

// Open modal and fill in task data
function openTaskModal(taskId) {
  currentTaskId = taskId;
  const task = tasks.find(t => t.id === taskId);
  titleInput.value = task.title;
  descInput.value = task.description;
  statusInput.value = task.status;
  modal.showModal();
}

// Save task
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = tasks.find(t => t.id === currentTaskId);
  task.title = titleInput.value;
  task.description = descInput.value;
  task.status = statusInput.value;

  console.log("Task saved:", task);
  modal.close();
 
});
