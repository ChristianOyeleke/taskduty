import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AllTasks from "./components/AllTasks";
import NewTask from "./components/NewTask";
import EditTask from "./components/EditTask";

const initialTasks = [
  {
    id: 1,
    title: "FinTech Website Update",
    priority: "Urgent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna.",
  },
  {
    id: 2,
    title: "Agro Website Update",
    priority: "Important",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.",
  },
  {
    id: 3,
    title: "FinTech Website Update",
    priority: "Urgent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum eu tempus ultricies cras neque mi. Eget tellus gravida pulvinar nibh aliquam faucibus et magna.",
  },
  {
    id: 4,
    title: "Agro Website Update",
    priority: "Important",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.",
  },
];

function App() {
  const [page, setPage] = useState("home"); // Starts on home banner view
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);

  // Unified navigation handler
  const navigateTo = (nextPage) => {
    if (nextPage !== "edit") {
      setSelectedTask(null);
    }
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Edit task
  const handleEdit = (task) => {
    setSelectedTask(task);
    setPage("edit");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Open new task page
  const handleNewTask = () => {
    navigateTo("new");
  };

  // Add new task
  const handleSaveNewTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    navigateTo("tasks");
  };

  // Update existing task
  const handleUpdateTask = (updatedTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );

    navigateTo("tasks");
  };

  // Delete task
  const handleDelete = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <div id="top" className="min-h-screen bg-[#faf9fc]">
      {/* Navbar with full navigation routing */}
      <Navbar
        onNewTask={handleNewTask}
        onGoToTasks={() => navigateTo("tasks")}
        onGoHome={() => navigateTo("home")}
      />

      {/* Hero / Landing Page */}
      {page === "home" && <Hero onGoToTasks={() => navigateTo("tasks")} />}

      {/* All Tasks Page */}
      {page === "tasks" && (
        <AllTasks
          tasks={tasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onNewTask={handleNewTask}
        />
      )}

      {/* New Task Page */}
      {page === "new" && (
        <NewTask
          onBack={() => navigateTo("tasks")}
          onSave={handleSaveNewTask}
        />
      )}

      {/* Edit Task Page */}
      {page === "edit" && selectedTask && (
        <EditTask
          task={selectedTask}
          onBack={() => navigateTo("tasks")}
          onSave={handleUpdateTask}
        />
      )}
    </div>
  );
}

export default App;
