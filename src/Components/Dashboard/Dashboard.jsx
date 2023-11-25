import { Outlet } from "react-router-dom";
import DashboardNav from "../../Pages/UserDashboard/DashboardNav/DashboardNav";

const Dashboard = () => {
  return (
    <>
      <div>
        <DashboardNav></DashboardNav>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Dashboard;
