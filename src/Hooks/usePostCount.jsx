import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePostCount = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: postCount = {}, isPending } = useQuery({
    queryKey: ["count", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/count/${user?.email}`);
      return res.data;
    },
  });
  return { postCount, isPending };
};

export default usePostCount;
