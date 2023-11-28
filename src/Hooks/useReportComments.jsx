import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReportComments = () => {
  const axiosSecure = useAxiosSecure();
  const { data: report = [], isPending } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const res = await axiosSecure.get("/report");
      return res.data;
    },
  });
  return [report, isPending];
};

export default useReportComments;
