import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSpecificPost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    isPending,
    refetch,
    data: posts = [],
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/posts/byUser?email=${user.email}`);
      return res.data;
    },
  });
  return [posts, isPending, refetch];
};

export default useSpecificPost;
