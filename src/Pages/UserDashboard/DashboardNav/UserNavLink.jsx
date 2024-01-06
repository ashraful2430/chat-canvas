import { NavLink } from "react-router-dom";
import Container from "../../../Shared/Container/Container";
import logo from "../../../assets/logo.png";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";

const UserNavLink = () => {
  const { user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (isAdminLoading) {
    return <p>loading</p>;
  }
  const defaultPhoto =
    "https://i.ibb.co/Fhm4brM/Screenshot-2023-11-25-145934.jpg";
  return (
    <>
      <div className="w-full navbar bg-base-100 shadow-xl">
        <Container>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div>
            <img className="w-32" src={logo} alt="" />
          </div>
          <div className="flex-none hidden lg:block ">
            <div className=" flex items-center ml-72 gap-4">
              {isAdmin ? (
                <>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? " bg-none text-blue-400 font-bold"
                        : "hover:text-blue-300 transition duration-100"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/dashboard/admin-profile"}
                    className={({ isActive }) =>
                      isActive
                        ? " bg-none text-blue-400 font-bold"
                        : "hover:text-blue-300 transition duration-100"
                    }
                  >
                    Admin Profile
                  </NavLink>
                  <NavLink
                    to={"/dashboard/manage-users"}
                    className={({ isActive }) =>
                      isActive
                        ? " bg-none text-blue-400 font-bold"
                        : "hover:text-blue-300 transition duration-100"
                    }
                  >
                    Manage users
                  </NavLink>
                  <NavLink
                    to={"/dashboard/reported"}
                    className={({ isActive }) =>
                      isActive
                        ? " bg-none text-blue-400 font-bold"
                        : "hover:text-blue-300 transition duration-100"
                    }
                  >
                    Reported comments
                  </NavLink>
                  <NavLink
                    to={"/dashboard/make-announcement"}
                    className={({ isActive }) =>
                      isActive
                        ? " bg-none text-blue-400 font-bold"
                        : "hover:text-blue-300 transition duration-100"
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
                      isActive
                        ? " bg-none text-blue-400 font-bold"
                        : "hover:text-blue-300 transition duration-100"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/dashboard/My-profile"}
                    className={({ isActive }) =>
                      isActive
                        ? " bg-none text-blue-400 font-bold"
                        : "hover:text-blue-300 transition duration-100"
                    }
                  >
                    My Profile
                  </NavLink>
                  <NavLink
                    to={"/dashboard/add-post"}
                    className={({ isActive }) =>
                      isActive
                        ? " bg-none text-blue-400 font-bold"
                        : "hover:text-blue-300 transition duration-100"
                    }
                  >
                    Add post
                  </NavLink>
                  <NavLink
                    to={"/dashboard/my-post"}
                    className={({ isActive }) =>
                      isActive
                        ? " bg-none text-blue-400 font-bold"
                        : "hover:text-blue-300 transition duration-100"
                    }
                  >
                    My post
                  </NavLink>
                  <div className="lg:ml-72">
                    <img
                      className="w-14 rounded-full"
                      src={user.photoURL ? user.photoURL : defaultPhoto}
                      alt=""
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default UserNavLink;
