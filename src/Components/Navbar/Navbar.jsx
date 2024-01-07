import Navlink from "./Navlink";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Navlink></Navlink>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <Sidebar></Sidebar>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
