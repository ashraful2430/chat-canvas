import { NavLink } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";

const UserSideNav = () => {
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center z-30">
        <div className="flex  justify-evenly w-full   ">
          <div className="flex flex-col items-center  mt-10  gap-5">
            {isAdmin ? (
              <>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-blue-400 font-bold" : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/dashboard/admin-profile"}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-blue-400 font-bold" : ""
                  }
                >
                  Admin Profile
                </NavLink>
                <NavLink
                  to={"/dashboard/manage-users"}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-blue-400 font-bold" : ""
                  }
                >
                  Manage users
                </NavLink>
                <NavLink
                  to={"/dashboard/reported"}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-blue-400 font-bold" : ""
                  }
                >
                  Reported comments
                </NavLink>
                <NavLink
                  to={"/dashboard/make-announcement"}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-blue-400 font-bold" : ""
                  }
                >
                  Make Announcement
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-blue-400 font-bold" : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/dashboard/My-profile"}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-blue-400 font-bold" : ""
                  }
                >
                  My Profile
                </NavLink>
                <NavLink
                  to={"/dashboard/add-post"}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-blue-400 font-bold" : ""
                  }
                >
                  Add post
                </NavLink>
                <NavLink
                  to={"/dashboard/my-post"}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-blue-400 font-bold" : ""
                  }
                >
                  My post
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSideNav;
