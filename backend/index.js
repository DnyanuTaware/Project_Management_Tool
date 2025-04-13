import express from "express";
import { connectDb } from "./database/db.js";
import TaskRoute from "./routes/TaskRoute.js";
import ContactRoute from "./routes/ContactRout.js";

const app = express();

//middleware to add  json data
app.use(express.json());

//misddleware to add form data
app.use(express.urlencoded({ extended: true }));

app.use("/api/project_management", TaskRoute);
app.use("/api/project_management/contact", ContactRoute);

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
  connectDb();
});
