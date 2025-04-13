import React, { useEffect, useState } from "react";
import { useData } from "../contexts/Context";

const Projects = () => {
  const { tasks, setTasks, getAllTasks, deleteTask, addTask } = useData();

  console.log(tasks);
  const [description, setDescription] = useState("");

  const handleAddTask = async () => {
    console.log("description", description);
    await addTask(description);
    setDescription("");
    await getAllTasks();
  };
  const handleDelete = async (id) => {
    await deleteTask(id);
    await getAllTasks();
  };

  return (
    <>
      <div className="container my-5" style={{ maxWidth: "700px" }}>
        <h2 className="mb-4">Project List</h2>
        <div className="mb-3 d-flex gap-2">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="projectName"
            placeholder="Enter project name"
            className="form-control"
          />
          <button onClick={handleAddTask} className="btn btn-success">
            Add Project
          </button>
        </div>
        <ul id="projectList" className="list-group mb-5"></ul>

        <section className="task-section">
          <h2 className="mb-4">Your Tasks</h2>
          <div className="d-flex flex-column gap-3" id="taskBoard">
            {tasks.map((task, i) => (
              <div className="card shadow-sm w-100" key={i}>
                <div className="card-body bg-light">
                  <h5 className="card-title">Task {i + 1}</h5>
                  <p className="card-text">{task.description}</p>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-dark"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2025 Project Manager. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Projects;
