import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Components/MainLayout/MainLayout";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Components/Home/Home";
import Membership from "../../Pages/Membership/Membership";
import Login from "../../Pages/UserOrAdminLogIn/Login/Login";
import Registration from "../../Pages/UserOrAdminLogIn/Registeration/Registration";
import Dashboard from "../../Components/Dashboard/Dashboard";
import MyProfile from "../../Pages/UserDashboard/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import AddPost from "../../Pages/UserDashboard/AddPost/AddPost";
import MyPost from "../../Pages/UserDashboard/MyPost/MyPost";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/membership",
        element: <Membership></Membership>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
  {
    path: "dashboard",
    element: (
      // user routes
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "My-Profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "add-post",
        element: (
          <PrivateRoute>
            <AddPost></AddPost>
          </PrivateRoute>
        ),
      },
      {
        path: "my-post",
        element: (
          <PrivateRoute>
            <MyPost></MyPost>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
