import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import About from "./pages/About.jsx";
import Info from "./component/Info.jsx";
import Update from "./pages/Update.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about/:id",
    element: <About />,
  },
  {
    path: "info",
    element: <Info />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
