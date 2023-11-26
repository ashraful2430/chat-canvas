import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePosts = () => {
  const axiosPublic = useAxiosPublic();

  const {
    isPending,
    refetch,
    data: posts = [],
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/posts/all");
      return res.data;
    },
  });
  return [posts, isPending, refetch];
};

export default usePosts;
