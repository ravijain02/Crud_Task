# Crud_Task
To run the Task Management App locally, follow these steps:

Clone the repository from GitHub:

git clone <repository-url>
Install the necessary dependencies for both the frontend and backend:

cd task-management-app/frontend
npm install

cd ../backend
npm install
Start the frontend and backend servers:

Copy code
# In the frontend directory
npm start

# In the backend directory
npm start
Access the application in your web browser at http://localhost:3001.

# Front-end
 Login Page
    The Login Page provides a form for users to enter their username and password.
    Users must enter a valid username and password to log in.
    Upon successful login, users are redirected to the Home Page.
  Home Page
    The Home Page displays a list of tasks.
    Each task is presented with its title, description, and buttons to mark it as completed, edit, or delete.
    Completed tasks are visually differentiated from incomplete tasks.
  Task List
    The Task List component is responsible for rendering the list of tasks.
    It receives tasks as props and displays them in a user-friendly manner.
# Back-end
Node.js Server
  The backend is built using Node.js with Express.
  The server serves the React frontend and handles API requests.
  API Endpoints
      GET /api/tasklist: Retrieves all tasks.
      GET /api/tasklist/:id: Retrieves a task by ID.
      POST /api/create: Creates a new task.
      PUT /api//tasklist/:id: Updates a task by ID.
      DELETE /api/delete/:id: Deletes a task by ID.
Usage
  Users can log in with their username and password.
  Once logged in, they can create new tasks, mark tasks as completed, edit tasks, or delete tasks.
  Tasks are listed on the Home Page, and users can interact with them using the provided buttons.
