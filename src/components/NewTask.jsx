import React from "react";
import TaskForm from "./TaskForm";

const NewTask = ({ onBack, onSave }) => {
  return <TaskForm mode="new" onBack={onBack} onSave={onSave} />;
};

export default NewTask;
