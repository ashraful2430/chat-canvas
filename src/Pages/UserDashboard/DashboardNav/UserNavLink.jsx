import { NavLink } from "react-router-dom";
import Container from "../../../Shared/Container/Container";
import logo from "../../../assets/logo.png";
import useAuth from "../../../Hooks/useAuth";

const UserNavLink = () => {
  const { user } = useAuth();
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
              <div className="lg:ml-72">
                <img
                  className="w-14 rounded-full"
                  src={user.photoURL ? user.photoURL : defaultPhoto}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default UserNavLink;
