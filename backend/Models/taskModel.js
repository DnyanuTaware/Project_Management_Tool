import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    description: String,
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model("Task", TaskSchema);
