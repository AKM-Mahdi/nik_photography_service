import * as React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./ROUTES/SimpleRoutes";

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
