import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  async function saveContactDetails(name, email, message, navigate) {
    try {
      const { data } = await axios.post(
        "/api/project_management/contact/contactdetails",
        {
          name,
          email,
          message,
        }
      );
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  async function getAllTasks() {
    try {
      const { data } = await axios.get("/api/project_management/getall");
      setTasks(data.tasks);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  async function addTask(description) {
    try {
      const { data } = await axios.post("/api/project_management/addtask", {
        description,
      });

      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  async function deleteTask(id) {
    try {
      const { data } = await axios.delete(
        "/api/project_management/deletetask/" + id
      );
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <Context.Provider
      value={{
        saveContactDetails,
        getAllTasks,
        tasks,
        setTasks,
        deleteTask,
        addTask,
      }}
    >
      {children}
      <Toaster />{" "}
    </Context.Provider>
  );
};

export const useData = () => useContext(Context);
