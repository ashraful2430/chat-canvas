import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReportComments = (currentPage, itemPerPage) => {
  const axiosSecure = useAxiosSecure();
  const { data: report = [], isPending } = useQuery({
    queryKey: ["report", currentPage, itemPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/report?page=${currentPage}&size=${itemPerPage}`
      );
      return res.data;
    },
  });
  return [report, isPending];
};

export default useReportComments;
