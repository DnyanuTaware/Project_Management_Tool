import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/Projects.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Home from "./components/Home.jsx";
import { ContextProvider } from "./contexts/Context.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </StrictMode>
);
