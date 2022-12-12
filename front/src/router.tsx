import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UserInfo from "./component/User/UserInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "dashboard",
    //     element: <App />,
    //   },
    //   {
    //     path: "about",
    //     element: <App />,
    //   },
    // ],
  },
  { path: "/user/:nickname", element: <UserInfo /> },
]);
export default router;
