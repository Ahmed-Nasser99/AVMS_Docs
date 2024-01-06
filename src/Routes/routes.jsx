import { createHashRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import { adminRoutes } from "./Admin.routes";
import { KioskRoutes } from "./Kiosk.routes";

export let routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "admin",
        children: adminRoutes,
      },
      {
        path: "kiosk",
        children: KioskRoutes,
      },
    ],
  },
]);
