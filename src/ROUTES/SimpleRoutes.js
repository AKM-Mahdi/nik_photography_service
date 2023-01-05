import { createBrowserRouter } from "react-router-dom";
import Home from "../COMPONENTS/Home/Home";
import Services from "../COMPONENTS/Services/Services";
import Main from "../LAYOUTS/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
    ],
  },
]);
