import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePosts = (currentPage, itemPerPage, search, sortBy) => {
  const axiosPublic = useAxiosPublic();
  const {
    isPending,
    refetch,
    data: posts = [],
  } = useQuery({
    queryKey: ["posts", { currentPage, itemPerPage, search, sortBy }],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/posts/all?page=${currentPage}&size=${itemPerPage}&search=${search}&sortBy=${sortBy}`
      );
      return res.data;
    },
  });
  return [posts, isPending, refetch];
};

export default usePosts;
