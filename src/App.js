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
import Companies from "./Pages/Home/Companies/Companies";
import DeviceTypes from "./Pages/Home/DeviceTypes/DeviceTypes";
import Blacklist from "./Pages/Home/Blacklist/Blacklist";
import Users from "./Pages/Users & Roles management/Users/Users";
import Roles from "./Pages/Users & Roles management/Roles/Roles";
import Report from "./Pages/Report/Report";

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
        {
          path: "/home/Companies",
          element: <Companies />,
        },
        {
          path: "/home/DeviceTypes",
          element: <DeviceTypes />,
        },
        {
          path: "/home/Blacklist",
          element: <Blacklist />,
        },
        {
          path: "/Users&RolesManagement/users",
          element: <Users />,
        },
        {
          path: "/Users&RolesManagement/roles",
          element: <Roles />,
        },
        {
          path: "/report",
          element: <Report />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
