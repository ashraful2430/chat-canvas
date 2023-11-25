import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { isPending, data: userInfo = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });
  return [userInfo, isPending];
};

export default useProfile;
