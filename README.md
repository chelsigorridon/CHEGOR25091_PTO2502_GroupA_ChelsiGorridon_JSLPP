# JSLPP Project:Kanban App 

---

## Links 
- Presentation Video 
- Netlify 
- Figma


## What is the Kanban App? :
This Kanban app is a web-based task management tool that helps you organize, track, and manage tasks visually using the Kanban methodology. Tasks are displayed in columns representing different stages of a workflow, making it easy to see what needs to be done, what’s in progress, and what’s completed.

---

## Key Features:

- Add, edit, and delete tasks
- Task status management: Move tasks between To Do, Doing, and Done columns
- Priority tracking: Assign priority levels (High, Medium, Low) to tasks
- Persistent storage: Tasks are saved in local storage and optionally fetched from an API
- Responsive design: Works on desktop and mobile
- Dark mode toggle: Switch between light and dark themes
- Modal-based task editing: Click a task to edit details in a modal

--- 

## Technology and Coding Languages used:

- HTML
- CSS
- Javascript
- Visual Studio Code (VS Code)
- Git Version control
- Local Storage for task persistence
- Optional: API integration for dynamic task loading
- Uploaded onto Netlify 

---

## Working usage and interactive instructions:

# Quick Start
- Open index.html in your browser.
- The app automatically loads tasks from the API or local storage. If none exist, it uses default tasks.
- Viewing Tasks

# Tasks are displayed in three columns:
- To Do – Not started
- Doing – In progress
- Done – Completed
- Column headers show the number of tasks.
- Adding a Task
- Click “+ Add New Task”.
- Fill in the Title, Description, Status, and Priority.

# Click “Create Task”.
- Task appears immediately and is saved to local storage.
- Editing a Task
- Click a task card.
- Update Title, Description, Status, or Priority in the modal.

# Click “Save Changes”.
- Changes reflect immediately on the board and in local storage.
- Deleting a Task
- Open the task modal.
- Click “Delete Task”.
- The task is removed from the board and local storage.

# Sidebar & Dark Mode
- Sidebar: Access boards, toggle theme, or collapse sidebar.
- Mobile: Click the logo to open a smaller sidebar modal.
- Dark Mode: Toggle between light and dark themes. Preference is saved locally.

# Persistence
- All changes are saved automatically.
- Reloading restores your tasks exactly as you left them.
- API loads tasks first; if it fails, the app falls back to local storage.



---

## Prerequisites - Make sure you have:

- A modern web browser (Chrome, Firefox, Edge, etc.)
- A code editor like VS Code
- Git installed if you're cloning a project

--- 

## Setup Steps:

- Clone or fork the repo on Github - https://github.com/chelsigorridon/CHEGOR25091_PTO2502_GroupA_ChelsiGorridon_JSL02.git
- Open the file on VS Code
- Open the Index.html file with the live server extension on VS code
- It will open the Kanban Website and the Prompts/Alerts should pop up and be interactive
- Check the interactivity of the prompts by filling in the text bar with a title,description and status
- Right click on the website and click inspect - this will take you to your dev tools
- In dev tools open the console to verify if javascript is running
