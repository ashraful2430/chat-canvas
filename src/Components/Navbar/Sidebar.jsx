import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { IoIosNotifications } from "react-icons/io";
import useAnnouncement from "../../Hooks/useAnnouncement";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const [announcement] = useAnnouncement();

  const handleLogOut = () => {
    logout()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="z-30">
      <div className="flex flex-col gap-2 justify-center items-center ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? " bg-none text-blue-500 font-bold"
              : "hover:text-blue-300 transition duration-100"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/membership"}
          className={({ isActive }) =>
            isActive
              ? " bg-none text-blue-500 font-bold"
              : "hover:text-blue-300 transition duration-100"
          }
        >
          Membership
        </NavLink>
        <NavLink>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">
              {announcement?.length}
            </span>
            <button className="">
              <IoIosNotifications className="text-xl mt-1" />
            </button>
          </div>
        </NavLink>
        {user && (
          <>
            <button onClick={handleLogOut}>Log out</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
