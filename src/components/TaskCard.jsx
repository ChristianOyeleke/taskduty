import React from "react";
import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="border border-gray-200 bg-white px-3 py-3">
      {/* Top */}
      <div className="flex items-center justify-between">
        <span
          className={`text-[9px] ${
            task.priority === "Urgent" ? "text-red-400" : "text-emerald-400"
          }`}
        >
          {task.priority}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task)}
            className="flex items-center gap-1 rounded-sm bg-purple-600 px-3 py-1 text-[8px] text-white transition hover:bg-purple-700 cursor-pointer"
          >
            <RiEditLine className="text-[10px]" />
            <span>Edit</span>
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="flex items-center gap-1 rounded-sm border border-purple-300 px-3 py-1 text-[8px] text-purple-600 transition hover:bg-purple-50 cursor-pointer"
          >
            <RiDeleteBinLine className="text-[10px]" />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="my-2 border-t border-gray-100" />

      {/* Task Details */}
      <h3 className="text-[11px] font-medium text-gray-800">{task.title}</h3>

      <p className="mt-1 text-[8px] leading-[1.45] text-gray-500">
        {task.description}
      </p>
    </div>
  );
};

export default TaskCard;
