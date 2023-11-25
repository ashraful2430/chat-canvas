import { NavLink } from "react-router-dom";

const UserSideNav = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center z-30">
        <div className="flex  justify-evenly w-full   ">
          <div className="flex flex-col items-center  mt-10  gap-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSideNav;
