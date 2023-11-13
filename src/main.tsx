import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./ErrorPage/index.tsx";
import Navbar from "./common/Navbar.tsx";
import Signup from "./pages/Signup/index.tsx";
import Login from "./pages/Login/index.tsx";
import Event from "./pages/Event/index.tsx";
import EventForm from "./pages/EventForm/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Email from "./pages/Email/Email.tsx";
import Invite from "./pages/Invite/Invite.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <App /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/event/edit/:id", element: <EventForm /> },
      { path: "/event/:id/email", element: <Email /> },
      { path: "/event/:id", element: <Event /> },
      { path: "/invite/:id", element: <Invite /> },
    ],
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router} />
  </QueryClientProvider>
);
