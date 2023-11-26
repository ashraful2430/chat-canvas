import Lottie from "lottie-react";
import errorAnimation from "../../assets/Animation - 1700814085397.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="">
      <Lottie
        className="w-[400px] md:w-[900px] mx-auto"
        animationData={errorAnimation}
      ></Lottie>
      <div className="text-center">
        <Link to={"/"}>
          <button className="btn btn-outline ">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
