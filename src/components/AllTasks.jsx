import React from "react";
import TaskCard from "./TaskCard";

const AllTasks = ({ tasks, onEdit, onDelete, onNewTask }) => {
  return (
    <main className="mx-auto min-h-[calc(100vh-48px)] max-w-[770px] px-4 py-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[15px] font-medium text-gray-800">My Tasks</h1>

        <button
          type="button"
          onClick={onNewTask}
          className="text-[9px] text-purple-500 hover:text-purple-700"
        >
          + Add New Task
        </button>
      </div>

      {/* Tasks */}
      <div className="space-y-5">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>

      {/* Back to top */}
      <div className="py-5 text-center">
        <a href="#top" className="text-[8px] text-purple-500 hover:underline">
          Back To Top
        </a>
      </div>
    </main>
  );
};

export default AllTasks;
