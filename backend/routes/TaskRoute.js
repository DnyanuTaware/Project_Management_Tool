import express from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
} from "../Controllers/TaskController.js";

const router = express.Router();

router.post("/addtask", addTask);
router.get("/getall", getAllTasks);
router.delete("/deletetask/:id", deleteTask);

export default router;
