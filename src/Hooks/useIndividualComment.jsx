import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useIndividualComment = (_id) => {
  const axiosSecure = useAxiosSecure();
  const { data: comments = [], isPending } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/comments/${_id}`);
      return res.data;
    },
  });
  return [comments, isPending];
};

export default useIndividualComment;
