import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useLoadThreeData = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { isLoading, data: threeData = [] } = useQuery({
    queryKey: ["threeData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/posts/limit?email=${user.email}`);
      return res.data;
    },
  });

  return [threeData, isLoading];
};

export default useLoadThreeData;
