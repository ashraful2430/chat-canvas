import UserNavLink from "./UserNavLink";
import UserSideNav from "./UserSideNav";

const DashboardNav = () => {
  return (
    <div>
      <div className="">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <UserNavLink></UserNavLink>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              <UserSideNav></UserSideNav>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
