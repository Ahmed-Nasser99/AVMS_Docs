import { createHashRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import { adminRoutes } from "./Admin.routes";

export let routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "admin",
        children: adminRoutes,
      },
    ],
  },
]);
