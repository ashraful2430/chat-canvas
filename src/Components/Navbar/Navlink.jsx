import { Link, NavLink } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import logo from "../../assets/logo.png";
import useAuth from "../../Hooks/useAuth";
import { IoIosNotifications } from "react-icons/io";

const Navlink = () => {
  const { user, logout } = useAuth();
  console.log(user);
  const handleLogOut = () => {
    logout()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const defaultPhoto =
    "https://i.ibb.co/Fhm4brM/Screenshot-2023-11-25-145934.jpg";
  return (
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
        <div className="flex-1 px-2 mx-2">
          <Link to={"/"}>
            <img className="w-36" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none hidden lg:block mr-28">
          <div className="flex items-center gap-4">
            {/* Navbar menu content here */}
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
                <span className="indicator-item badge badge-secondary">0</span>
                <button className="">
                  <IoIosNotifications className="text-xl mt-1" />
                </button>
              </div>
            </NavLink>
          </div>
        </div>
        {user?.email ? (
          <div className="dropdown dropdown-end z-50 text-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL ? user?.photoURL : defaultPhoto} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="font-medium">{user.displayName}</p>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm  btn-ghost transition hover:scale-110 hover:shadow-xl focus:outline-none"
                >
                  Logout
                </button>
              </li>
              <li>
                <Link to={"/dashboard/My-profile"}>
                  <p className=" font-medium ml-10">Dashboard</p>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-white bg-blue-500 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-pink-500">
              Join us
            </button>
          </Link>
        )}
        <div></div>
      </Container>
    </div>
  );
};

export default Navlink;
