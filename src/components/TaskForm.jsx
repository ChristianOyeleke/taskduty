import React, { useState } from "react";

const TaskForm = ({ mode = "new", task, onBack, onSave }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [priority, setPriority] = useState(task?.priority || "Urgent");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...task,
      title,
      description,
      priority,
    });
  };

  return (
    <main className="mx-auto min-h-[calc(100vh-48px)] max-w-[770px] px-4 py-5">
      {/* Heading */}
      <button
        onClick={onBack}
        className="mb-5 flex items-center gap-1 text-[14px] text-gray-700"
      >
        <span className="text-xl leading-none">‹</span>

        {mode === "edit" ? "Edit Task" : "New Task"}
      </button>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="mb-1 block text-[9px] text-gray-400">
            Task Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="E.g Project Defense, Assignment..."
            className="h-7 w-full border border-gray-200 bg-transparent px-3 text-[9px] text-gray-700 outline-none placeholder:text-gray-300 focus:border-purple-400"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="mb-1 block text-[9px] text-gray-400">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Briefly describe your task..."
            className="h-[73px] w-full resize-none border border-gray-200 bg-transparent px-3 py-2 text-[9px] leading-[1.4] text-gray-700 outline-none placeholder:text-gray-300 focus:border-purple-400"
            required
          />
        </div>

        {/* Tags */}
        <div className="mb-7">
          <label className="mb-1 block text-[9px] text-gray-400">Tags</label>

          <div className="flex h-7 items-center justify-between border border-gray-200 px-3">
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setPriority("Urgent")}
                className={`px-2 py-[1px] text-[7px] ${
                  priority === "Urgent"
                    ? "bg-gray-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                Urgent
              </button>

              <button
                type="button"
                onClick={() => setPriority("Important")}
                className={`px-2 py-[1px] text-[7px] ${
                  priority === "Important"
                    ? "bg-gray-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                Important
              </button>
            </div>

            <span className="text-gray-500">⌄</span>
          </div>
        </div>

        {/* Done */}
        <button
          type="submit"
          className="h-7 w-full rounded-sm bg-purple-600 text-[9px] font-medium text-white transition hover:bg-purple-700"
        >
          Done
        </button>
      </form>

      {/* Back */}
      <div className="mt-4 text-center">
        <button
          onClick={onBack}
          className="text-[8px] text-purple-500 hover:underline"
        >
          Back To Top
        </button>
      </div>
    </main>
  );
};

export default TaskForm;
