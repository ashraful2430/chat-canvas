import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { IoIosNotifications } from "react-icons/io";

const Sidebar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
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
            isActive ? " bg-none text-red-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/assignments"}
          className={({ isActive }) =>
            isActive ? " bg-none text-red-500 font-bold" : ""
          }
        >
          Assignments
        </NavLink>
        <NavLink>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">0</span>
            <button className="">
              <IoIosNotifications className="text-xl mt-1" />
            </button>
          </div>
        </NavLink>
        {user && (
          <>
            <NavLink
              to={"/myAssignments"}
              className={({ isActive }) =>
                isActive ? " bg-none text-red-500 font-bold" : ""
              }
            >
              My Assignments
            </NavLink>
            <NavLink
              to={"/submittedAssignments"}
              className={({ isActive }) =>
                isActive ? " bg-none text-red-500 font-bold" : ""
              }
            >
              Submitted Assignments
            </NavLink>
            <button onClick={handleLogOut}>Log out</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
