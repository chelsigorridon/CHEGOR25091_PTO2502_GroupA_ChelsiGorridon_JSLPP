// Get modal and inputs
const modal = document.getElementById('task-modal');
const form = document.getElementById('task-form');
const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-desc');
const statusInput = document.getElementById('task-status');

// store tasks in an array (could also be localStorage)
let tasks = [
  { id: 1, title: "Example Task", description: "Demo", status: "todo" }
];
let currentTaskId = 1; 

// Open modal for editing (example)
function openTaskModal(taskId) {
  currentTaskId = taskId;
  const task = tasks.find(t => t.id === taskId);
  titleInput.value = task.title;
  descInput.value = task.description;
  statusInput.value = task.status;
  modal.showModal();
}

// Save button event
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting normally

  // Update the task
  const task = tasks.find(t => t.id === currentTaskId);
  task.title = titleInput.value;
  task.description = descInput.value;
  task.status = statusInput.value;

  console.log("Task saved:", task); 
  modal.close();

  // Here you could also re-render the task list or save to localStorage
});


openTaskModal(1);