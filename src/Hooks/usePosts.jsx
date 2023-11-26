import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePosts = (currentPage, itemPerPage, search) => {
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    refetch,
    data: posts = [],
  } = useQuery({
    queryKey: ["posts", { currentPage, itemPerPage, search }],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/posts/all?page=${currentPage}&size=${itemPerPage}&search=${search}`
      );
      return res.data;
    },
  });
  return [posts, isPending, refetch];
};

export default usePosts;
