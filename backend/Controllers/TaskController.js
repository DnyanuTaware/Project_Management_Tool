import { Task } from "../Models/taskModel.js";
import TryCatch from "../Utils/TryCatch.js";

export const addTask = TryCatch(async (req, res) => {
  const { description } = req.body;

  let task = await Task.create({
    description,
  });

  res.status(200).json({
    message: "Task created successfully",
    task,
  });
});

export const getAllTasks = TryCatch(async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });

  if (tasks) {
    res.status(200).json({
      message: "Getting all tasks",
      tasks,
    });
  } else {
    res.status(200).json({
      message: "Task array is empty",
      tasks,
    });
  }
});

export const deleteTask = TryCatch(async (req, res) => {
  const id = req.params.id;

  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(400).json({
      message: "No task with this id",
    });
  }

  await task.deleteOne();
  res.status(200).json({
    message: "Task deleted Successfully",
  });
});
