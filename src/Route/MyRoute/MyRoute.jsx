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
import MakeAnnouncement from "../../Pages/AdminDashboard/MakeAnnouncement/MakeAnnouncement";
import ReportedComment from "../../Pages/AdminDashboard/ReportedComment/ReportedComment";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://chat-canvas-server-site.vercel.app/postCount"),
      },
      {
        path: "/membership",
        element: (
          <PrivateRoute>
            {" "}
            <Membership></Membership>
          </PrivateRoute>
        ),
      },
      {
        path: "/post-details/:id",
        element: <AllPostDetails></AllPostDetails>,
        loader: ({ params }) =>
          fetch(
            `https://chat-canvas-server-site.vercel.app/posts/all/${params.id}`
          ),
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
    element: <Dashboard></Dashboard>,
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
          fetch(
            `https://chat-canvas-server-site.vercel.app/posts/all/${params.id}`
          ),
      },
      // admin routes
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
        loader: () =>
          fetch("https://chat-canvas-server-site.vercel.app/users-count"),
      },
      {
        path: "admin-profile",
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: "make-announcement",
        element: (
          <AdminRoute>
            <MakeAnnouncement></MakeAnnouncement>
          </AdminRoute>
        ),
      },
      {
        path: "reported",
        element: (
          <AdminRoute>
            <ReportedComment></ReportedComment>
          </AdminRoute>
        ),
        loader: () =>
          fetch("https://chat-canvas-server-site.vercel.app/report-count"),
      },
    ],
  },
]);

export default routes;
