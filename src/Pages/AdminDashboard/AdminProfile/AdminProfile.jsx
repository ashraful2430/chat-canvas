import Lottie from "lottie-react";
import useAuth from "../../../Hooks/useAuth";
import useProfile from "../../../Hooks/useProfile";
import Container from "../../../Shared/Container/Container";
import tanstackLoading from "../../../assets/tanstack.json";
import ShowStat from "./ShowStat";

const AdminProfile = () => {
  const { user } = useAuth();
  const [userInfo, isPending] = useProfile();

  const defaultPhoto =
    "https://i.ibb.co/Fhm4brM/Screenshot-2023-11-25-145934.jpg";
  const bronzeMedal =
    "https://i.ibb.co/JvCwb8D/Screenshot-2023-11-25-220609.jpg";

  const goldMedal = "https://i.ibb.co/1v8pm9x/Screenshot-2023-11-25-220650.jpg";

  if (isPending) {
    return (
      <Lottie
        className="w-40 flex justify-center items-center mx-auto min-h-screen"
        animationData={tanstackLoading}
      ></Lottie>
    );
  }
  return (
    <div className="-z-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10">
          <div className="lg:col-span-1 mx-auto md:mx-0 text-center md:text-left ">
            <img
              className="w-36 rounded-full"
              src={user.photoURL ? user.photoURL : defaultPhoto}
              alt=""
            />
            <h3 className="font-medium text-xl mt-4">{user.displayName}</h3>
            <p className="mt-3 text-sm">Welcome Back</p>
          </div>
          <div className="lg:col-span-2">
            <div>
              <h3 className="font-medium text-3xl">User Information</h3>
              <div className="flex flex-col  lg:flex-row  lg:items-center lg:gap-7 border-red-400">
                <p className="mt-4 font-medium">Name: {user.displayName}</p>
                <p className="mt-4 font-medium">Email:{user.email}</p>
              </div>
              {userInfo.badge === "Bronze" && (
                <p className="flex items-center gap-2 font-medium">
                  Badge:
                  <img className="w-10" src={bronzeMedal} />
                </p>
              )}
              {userInfo.badge === "Gold" && (
                <p className="flex items-center gap-2">
                  Badge:
                  <img className="w-10" src={goldMedal} />
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="z-0">
          <h3 className="text-center text-2xl font-medium">Website stat</h3>
          <ShowStat></ShowStat>
        </div>
      </Container>
    </div>
  );
};

export default AdminProfile;
