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
import ShowComment from "../../Pages/UserDashboard/ShowComment/ShowComment";
import AllPostDetails from "../../Components/AllPostDetails/AllPostDetails";
import AllUser from "../../Pages/AdminDashboard/AllUser/AllUser";
import AdminProfile from "../../Pages/AdminDashboard/AdminProfile/AdminProfile";
import AdminRoute from "./AdminRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/postCount"),
      },
      {
        path: "/membership",
        element: <Membership></Membership>,
      },
      {
        path: "/post-details/:id",
        element: <AllPostDetails></AllPostDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/posts/all/${params.id}`),
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
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // user routes
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
      {
        path: "comments/:id",
        element: (
          <PrivateRoute>
            <ShowComment></ShowComment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/posts/all/${params.id}`),
      },
      // admin routes
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "admin-profile",
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default routes;
