import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Lottie from "lottie-react";
import tanstackLoading from "../../../assets/tanstack.json";
import { FiUsers } from "react-icons/fi";
import { TfiCommentsSmiley } from "react-icons/tfi";

const ShowStat = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stat, isPending } = useQuery({
    queryKey: ["stat"],
    queryFn: async () => {
      const res = await axiosSecure.get("/forum-stats");
      return res.data;
    },
  });
  if (isPending) {
    return (
      <Lottie
        className="w-40 flex justify-center items-center mx-auto min-h-screen"
        animationData={tanstackLoading}
      ></Lottie>
    );
  }

  return (
    <div className="w-full mx-auto text-center mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          style={{
            background: "linear-gradient(90deg, #6AAEFF 30%, #B6F7FF 100%)",
          }}
          className="flex items-center text-center gap-5 py-7 px-5  rounded-lg text-white"
        >
          <div>
            <FiUsers className="text-5xl" />
          </div>
          <div>
            <p className="text-3xl text-center">Total Users</p>
            <p className="text-3xl">{stat.userCount}</p>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(90deg, #FE4880 30%, #B6F7FF 100%)",
          }}
          className="flex items-center text-center gap-5 py-7 px-5  rounded-lg text-white"
        >
          <div>
            <FiUsers className="text-5xl" />
          </div>
          <div>
            <p className="text-3xl">Total post</p>
            <p className="text-3xl">{stat.postCount}</p>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(90deg, #BB34F5 30%, #B6F7FF 100%)",
          }}
          className="flex items-center text-center gap-5 py-7 px-5  rounded-lg text-white"
        >
          <div>
            <TfiCommentsSmiley className="text-5xl" />
          </div>
          <div>
            <p className="text-3xl">Total Comments</p>
            <p className="text-3xl">{stat.commentCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowStat;
