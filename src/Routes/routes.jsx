import { createHashRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import { adminRoutes } from "./Admin.routes";
import { KioskRoutes } from "./Kiosk.routes";
import WelcomePage from "../Pages/Introducation/WelcomePage";

export let routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <WelcomePage /> },
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
