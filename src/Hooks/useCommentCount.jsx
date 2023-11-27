import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCommentCount = (_id) => {
  const axiosSecure = useAxiosSecure();
  const { data: comments = [] } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/comments/count/${_id}`);
      return res.data;
    },
  });
  return [comments];
};

export default useCommentCount;
