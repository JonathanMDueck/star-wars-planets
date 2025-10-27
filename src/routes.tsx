import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import PlanetDetails from "./pages/home/planetDetails";
import AppLayout from "./pages/layout/appLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/planet-details/:id",
        element: <PlanetDetails />,
      },
    ],
  },
]);
