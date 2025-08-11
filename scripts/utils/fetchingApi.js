

async function fetchTasksFromApi() {
  try {
    const response = await fetch("https://jsl-kanban-api.vercel.app/");
    if (!response.ok) throw new Error("API error");
    return await response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

export const fetchTasksFromApi = fetchTasksFromApi;
export const saveTasksToStorage = saveTasksToStorage;
export const loadTasksFromStorage = loadTasksFromStorage;