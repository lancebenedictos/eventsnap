import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./ErrorPage/index.tsx";
import Navbar from "./common/Navbar.tsx";
import Signup from "./pages/Signup/index.tsx";
import Login from "./pages/Login/index.tsx";
import Event from "./pages/Event/Event.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <App /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/event/:id", element: <Event /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
