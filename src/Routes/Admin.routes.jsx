import CustomDashboard from "../Pages/Dashboard/CustomDashboard/CustomDashboard";
import MainDashboard from "../Pages/Dashboard/MainDashboard/MainDashboard";
import Blacklist from "../Pages/Home/Blacklist/Blacklist";
import Buildings from "../Pages/Home/Buildings/Buildings";
import Companies from "../Pages/Home/Companies/Companies";
import DeviceTypes from "../Pages/Home/DeviceTypes/DeviceTypes";
import Devices from "../Pages/Home/Devices/Devices";
import Floors from "../Pages/Home/Floors/Floors";
import Gates from "../Pages/Home/Gates/Gates";
import MainHome from "../Pages/Home/MainHome";
import Sectors from "../Pages/Home/Sectors/Sectors";
import Units from "../Pages/Home/Units/Units";
import Invitation from "../Pages/Invitation/Invitation";
import Report from "../Pages/Report/Report";
import Roles from "../Pages/Users & Roles management/Roles/Roles";
import Users from "../Pages/Users & Roles management/Users/Users";

export let adminRoutes = [
  {
    index: true,
    element: <MainDashboard />,
  },
  {
    path: "customDashboard",
    element: <CustomDashboard JsonKey={"dashboardOverview"} />,
  },
  {
    path: "report",
    element: <Report />,
  },
  {
    path: "Invitation",
    element: <Invitation />,
  },
  {
    path: "home",
    children: [
      {
        index: true,
        element: <MainHome />,
      },
      {
        path: "Sectors",
        element: <Sectors />,
      },
      {
        path: "Buildings",
        element: <Buildings />,
      },
      {
        path: "Floors",
        element: <Floors />,
      },
      {
        path: "Units",
        element: <Units />,
      },
      {
        path: "Gates",
        element: <Gates />,
      },
      {
        path: "Devices",
        element: <Devices />,
      },
      {
        path: "Companies",
        element: <Companies />,
      },
      {
        path: "DeviceTypes",
        element: <DeviceTypes />,
      },
      {
        path: "Blacklist",
        element: <Blacklist />,
      },
    ],
  },
  {
    path: "Users&RolesManagement",
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "roles",
        element: <Roles />,
      },
    ],
  },
];
