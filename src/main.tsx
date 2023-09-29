import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./pages/Movies/index.tsx";
import TVShows from "./pages/TVShows/index.tsx";
import About from "./pages/About/index.tsx";
import "./index.css";
import Home from "./pages/Home/index.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Search from "./pages/Search/index.tsx";

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
        path: "/search",
        element: <Search />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
