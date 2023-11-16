import "./App.css";
import Layout from "./Components/Layout/Layout";
import { RouterProvider, createHashRouter } from "react-router-dom";
import MainDashboard from "./Pages/Dashboard/MainDashboard/MainDashboard";
import CustomDashboard from "./Pages/Dashboard/CustomDashboard/CustomDashboard";
import MainHome from "./Pages/Home/MainHome";
import Sectors from "./Pages/Home/Sectors/Sectors";
import Buildings from "./Pages/Home/Buildings/Buildings";
import Floors from "./Pages/Home/Floors/Floors";
import Units from "./Pages/Home/Units/Units";
import Gates from "./Pages/Home/Gates/Gates";
import Devices from "./Pages/Home/Devices/Devices";

function App() {
  let routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainDashboard />,
        },
        {
          path: "/dashboard/customDashboard",
          element: <CustomDashboard />,
        },
        {
          path: "/home/",
          element: <MainHome />,
        },
        {
          path: "/home/Sectors",
          element: <Sectors />,
        },
        {
          path: "/home/Buildings",
          element: <Buildings />,
        },
        {
          path: "/home/Floors",
          element: <Floors />,
        },
        {
          path: "/home/Units",
          element: <Units />,
        },
        {
          path: "/home/Gates",
          element: <Gates />,
        },
        {
          path: "/home/Devices",
          element: <Devices />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
