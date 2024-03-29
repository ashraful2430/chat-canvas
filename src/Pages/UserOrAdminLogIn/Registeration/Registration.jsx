import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Registration = () => {
  const [showPass, setShowPass] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();

  const { registerUser, handleUpdateProfile } = useAuth();
  const badge = "Bronze";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        handleUpdateProfile(data.name).then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            badge,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User registered successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Sorry!",
          text: "Something went wrong please try again",
          icon: "error",
        });
      });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
          <div
            className="hidden bg-cover lg:block lg:w-1/2 "
            style={{
              backgroundImage: "url('https://i.ibb.co/89WDny5/5098293.jpg')",
            }}
          ></div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img className="w-auto h-20 sm:h-8" src={logo} alt="" />
            </div>

            <p
              id="reg-welcome"
              className="mt-3 text-xl text-center text-gray-600 "
            >
              Welcome To Our website!
            </p>

            <SocialLogin></SocialLogin>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase hover:underline">
                or login with email
              </div>

              <span className="w-1/5 border-b  lg:w-1/4"></span>
            </div>

            <form id="registration-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 ">
                  Name
                </label>
                <input
                  data-cy="reg-name"
                  id="reg-name"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Your name"
                />
                {errors.name && (
                  <span data-cy="reg-error-name" className="text-red-500">
                    Your name is required
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="reg-email"
                >
                  Email Address
                </label>
                <input
                  id="reg-email"
                  data-cy="reg-email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Your email"
                />
                {errors.email && (
                  <span data-cy="reg-error-email" className="text-red-500">
                    Your email is required
                  </span>
                )}
              </div>

              <div className="mt-4 relative">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="reg-pass"
                  >
                    Password
                  </label>
                  <p className="text-xs text-gray-500  hover:underline">
                    Forget Password?
                  </p>
                </div>

                <input
                  data-cy="reg-pass"
                  id="reg-pass"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type={showPass ? "text" : "password"}
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/,
                  })}
                  placeholder="********"
                />
                {errors.password && (
                  <span data-cy="reg-error-pass" className="text-red-500">
                    {errors.password.type === "minLength" &&
                      "Password must have at least one uppercase, one lower case, and a special letter"}
                    {errors.password.type === "pattern" &&
                      "Password must be at least 6 characters"}
                    {errors.password.type === "maxLength" &&
                      "Password must be under 20 characters"}
                  </span>
                )}
                <p
                  onClick={() => setShowPass(!showPass)}
                  className="absolute inset-y-0 end-0 grid place-content-center px-4  top-5 hover:cursor-pointer"
                >
                  {showPass ? <FaEye /> : <IoMdEyeOff />}
                </p>
              </div>

              <div className="mt-6">
                <button
                  data-cy="reg-button"
                  id="reg-button"
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  md:w-1/4"></span>

              <p className="text-xs text-gray-500 uppercase  hover:underline">
                or{" "}
                <Link className="text-blue-400" to={"/login"}>
                  Log in
                </Link>
              </p>

              <span className="w-1/5 border-b  md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
