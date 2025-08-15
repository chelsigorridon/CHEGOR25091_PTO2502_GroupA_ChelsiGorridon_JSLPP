import { initialTasks } from "../../initialData.js";

/**
 * Loads tasks from localStorage or fetches from API if empty.
 * @returns {Promise<Array<Object>>} The array of tasks.
 */
export async function loadTasksFromStorageOrAPI() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (err) {
      console.error("Error parsing tasks from localStorage:", err);
    }
  }

  // No tasks in localStorage — fetch from API
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos"); // <-- replace with your API
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const apiTasks = await response.json();

    // Save API tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(apiTasks));
    return apiTasks;
  } catch (err) {
    console.error("API fetch failed, falling back to initialTasks:", err);
  }

  // Fallback to initialTasks if API fails
  localStorage.setItem("tasks", JSON.stringify(initialTasks));
  return initialTasks;
}

/**
 * Saves the given task array to localStorage.
 * @param {Array<Object>} tasks
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}