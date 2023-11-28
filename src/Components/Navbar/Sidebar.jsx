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
    <div>
      <div className="flex flex-col gap-2 justify-center items-center z-30">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? " bg-none text-blue-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/membership"}
          className={({ isActive }) =>
            isActive ? " bg-none text-blue-500 font-bold" : ""
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
