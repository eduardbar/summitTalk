# SummitTalk Agent Guidelines

This document provides comprehensive guidelines for AI agents working on the SummitTalk codebase. It details the project structure, development workflows, and coding conventions to ensure consistency and quality.

## 1. Project Overview & Architecture

SummitTalk is a real-time chat application built as a monorepo. It strictly separates concerns between the server and client.

- **Root Directory**: Project metadata and monorepo management.
- **Backend (`/backend`)**: Node.js/Express REST API with WebSocket support.
- **Frontend (`/frontend`)**: React SPA powered by Vite.

### Technology Stack
- **Runtime**: Node.js
- **Database**: MongoDB (Mongoose ODM)
- **State Management**: Zustand (Frontend)
- **Real-time**: Socket.io (Server & Client)
- **Styling**: Tailwind CSS + DaisyUI
- **Authentication**: JWT (HttpOnly Cookies) + bcryptjs

## 2. Environment & Commands

### Backend (`/backend`)
*Ensure you are in the `backend` directory before running these commands.*

- **Install Dependencies**: `npm install`
- **Start Development**: `npm run dev` (Uses `nodemon` for hot-reloading)
- **Start Production**: `npm start`
- **Linting**: No explicit script. Adhere strictly to **ES Modules** syntax.
- **Testing**:
  - *Current Status*: No test runner configured.
  - *Agent Instruction*: If asked to write tests, use **Node's native test runner** or **Jest**. Install only as a dev dependency.
  - *Running a single test*: `npx jest path/to/test.js` (if Jest is installed).

### Frontend (`/frontend`)
*Ensure you are in the `frontend` directory before running these commands.*

- **Install Dependencies**: `npm install`
- **Start Development**: `npm run dev` (Vite)
- **Build**: `npm run build` (Outputs to `dist`)
- **Preview**: `npm run preview`
- **Linting**: `npm run lint` (ESLint with React plugins).
- **Testing**:
  - *Current Status*: No test runner configured.
  - *Agent Instruction*: If asked to write tests, use **Vitest**.
  - *Running a single test*: `npx vitest path/to/test.jsx` (if Vitest is installed).

## 3. Code Style & Conventions

### General Rules (Global)
- **Formatting**:
  - Indentation: **2 spaces**.
  - Semicolons: **Always** use semicolons.
  - Quotes: **Double quotes** (`"`) for strings and imports.
- **Imports**:
  - Use **ES Module** syntax (`import`/`export`).
  - **CRITICAL**: Local imports in the backend MUST include the file extension (e.g., `import User from "../models/user.model.js"`).
- **Environment**: Use `dotenv`. Access variables via `process.env` (Backend) or `import.meta.env` (Frontend).

### Backend Conventions
1.  **Architecture**: Follow the **Route -> Controller -> Model** pattern.
    -   **Routes**: Define endpoints and map them to controller functions.
    -   **Controllers**: Handle business logic, request validation, and response formatting.
    -   **Models**: Define Mongoose schemas.
2.  **Async/Await**: Always use `async/await` for asynchronous operations. Avoid callback hell.
3.  **Error Handling**:
    -   Wrap controller logic in `try/catch` blocks.
    -   Log errors to the console: `console.log("Error in <function_name>", error.message);`.
    -   Return standard JSON errors: `res.status(500).json({ message: "Internal Server Error" });`.
    -   Validate inputs explicitly at the start of the controller (return 400).
4.  **Naming**:
    -   Files: `camelCase` or `kebab-case` generally, but explicit types like `.model.js`, `.controller.js`, `.route.js` are required.
    -   Variables: `camelCase`.
    -   Models: `PascalCase` (e.g., `User`, `Message`).

### Frontend Conventions
1.  **Component Structure**:
    -   Use **Functional Components** with Hooks.
    -   Filename: `PascalCase.jsx` (e.g., `ChatContainer.jsx`).
    -   Place generic UI components in `src/components`.
    -   Place page-level components in `src/pages`.
2.  **State Management (Zustand)**:
    -   Store files located in `src/store`.
    -   Naming: `use<StoreName>Store.js` (e.g., `useAuthStore.js`).
    -   Actions should handle API calls and state updates (success/error/loading).
    -   Use `set()` and `get()` for state manipulation.
3.  **API Interaction**:
    -   Use the pre-configured `axiosInstance` from `src/lib/axios.js`.
    -   Do not create raw `fetch` calls unless absolutely necessary.
    -   Handle errors using `react-hot-toast` for user feedback: `toast.error(error.response.data.message)`.
4.  **Styling**:
    -   Use **Tailwind CSS** utility classes directly in JSX `className`.
    -   Leverage **DaisyUI** components for complex UI elements (modals, buttons, inputs).
    -   Keep layout responsive (mobile-first approach).

## 4. Development Workflow for Agents

When implementing features or fixing bugs, follow this strictly:

1.  **Context Check**:
    -   Verify the current working directory.
    -   If modifying the backend, check `backend/src/models` for schema definitions first.
    -   If modifying the frontend, check `frontend/src/store` to see if state logic already exists.

2.  **Implementation Steps**:
    -   **Backend**:
        1.  Create/Update Mongoose Model.
        2.  Create/Update Controller function (validation -> logic -> response).
        3.  Register Route in `routes/*.route.js`.
        4.  Verify server startup: `npm run dev` (in background).
    -   **Frontend**:
        1.  Update Zustand store to handle new data/actions.
        2.  Create/Update UI Component using Tailwind/DaisyUI.
        3.  Integrate store data into the component.
        4.  Verify build: `npm run build`.

3.  **Safety & Validation**:
    -   **Never** leave the codebase in a broken state.
    -   If adding a dependency, ensure it is added to the correct `package.json` (backend vs frontend).
    -   Do not delete existing data in the database unless explicitly requested.

## 5. Specific File Patterns

### Authentication (Backend)
-   **Token Generation**: Use `generateToken` utility from `src/lib/utils.js`.
-   **Middleware**: Protect routes using `protectRoute` from `src/middleware/auth.middleware.js`.
-   **User Access**: Accessed via `req.user` in protected routes.

### Real-time (Socket.io)
-   **Server**: Initialized in `src/lib/socket.js`. Use `io.emit` or `io.to(socketId).emit` for updates.
-   **Client**: Logic resides in `useAuthStore.js` (connection) or specific stores. Listen for events like `getOnlineUsers` or `newMessage`.

### File Uploads
-   Use **Cloudinary**.
-   Controller logic should handle the upload string (base64) and save the resulting URL to the database.

## 6. Cursor & Copilot Integration

-   **Cursor**: If `.cursorrules` exists, those rules take precedence over general patterns.
-   **Copilot**: Follow conventions in `.github/copilot-instructions.md` if available.
-   *Note*: Currently, no specific rule files exist for these tools in this repo. Adhere strictly to this `AGENTS.md`.

---
*Generated by opencode for SummitTalk repository.*
