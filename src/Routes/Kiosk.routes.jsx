import CreateTodayInvitation from "../Pages/Kiosk/CreateTodayInvitation/CreateTodayInvitation";
import CreateUpcomingInvitation from "../Pages/Kiosk/CreateUpcomingInvitation/CreateUpcomingInvitation";
import SearchVisits from "../Pages/Kiosk/SearchVisits/SearchVisits";
import VisitType from "../Pages/Kiosk/VisitType/VisitType";
import Welcome from "../Pages/Kiosk/Welcome/Welcome";

export let KioskRoutes = [
  { index: true, element: <Welcome /> },
  {
    path: "visitType",
    element: <VisitType />,
  },
  {
    path: "todayInvitation",
    element: <CreateTodayInvitation />,
  },
  {
    path: "upcomingInvitation",
    element: <CreateUpcomingInvitation />,
  },
  {
    path: "SearchVisits",
    element: <SearchVisits />,
  },
];
