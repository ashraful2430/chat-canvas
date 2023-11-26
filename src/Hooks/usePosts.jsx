import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePosts = () => {
  const axiosPublic = useAxiosPublic();

  const { isPending, data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/posts");
      return res.data;
    },
  });
  return [posts, isPending];
};

export default usePosts;
