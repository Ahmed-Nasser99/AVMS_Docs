import "./App.css";
import Layout from "./Components/Layout/Layout";
import { RouterProvider, createHashRouter } from "react-router-dom";
import MainDashboard from "./Pages/Dashboard/MainDashboard/MainDashboard";
import CustomDashboard from "./Pages/Dashboard/CustomDashboard/CustomDashboard";
import MainHome from "./Pages/Home/MainHome";
import Sectors from "./Pages/Home/Sectors/Sectors";

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
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
