import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default App;
