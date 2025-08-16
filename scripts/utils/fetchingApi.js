import { loadTasksFromStorage, saveTasksToStorage } from "./localStorage.js";
import { initialTasks } from "../../initialData.js";

const API_URL = "https://jsl-kanban-api.vercel.app/";

export async function loadTasksFromAPIOrStorage() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`API returned ${res.status}`);
    const data = await res.json();
    saveTasksToStorage(data);
    return data;
  } catch (err) {
    console.warn("API failed, falling back to localStorage:", err);
    const stored = loadTasksFromStorage();
    if (!stored || stored.length === 0) {
      saveTasksToStorage(initialTasks);
      return initialTasks;
    }
    return stored;
  }
}

console.log("fetchingApi.js loaded successfully.");