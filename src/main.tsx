import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./pages/Movies/index.tsx";
import TVShows from "./pages/TVShows/index.tsx";
import About from "./pages/About/index.tsx";
import "./index.css";
import Home from "./pages/Home/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tv-shows",
        element: <TVShows />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
