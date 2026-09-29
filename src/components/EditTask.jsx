import React from "react";
import TaskForm from "./TaskForm";

const EditTask = ({ task, onBack, onSave }) => {
  return <TaskForm mode="edit" task={task} onBack={onBack} onSave={onSave} />;
};

export default EditTask;
