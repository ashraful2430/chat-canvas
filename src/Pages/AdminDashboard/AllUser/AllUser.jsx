import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Container from "../../../Shared/Container/Container";
import AllUserTable from "./AllUserTable";
import Lottie from "lottie-react";
import commentLoading from "../../../assets/comment-loading.json";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  if (isPending) {
    return <p>loadimg</p>;
  }
  if (!Array.isArray(users)) {
    return (
      <Lottie
        animationData={commentLoading}
        className="w-40 flex justify-center items-center mx-auto min-h-screen"
      ></Lottie>
    );
  }
  return (
    <div>
      <Container>
        <h3 className="text-center text-3xl font-medium mt-5">All users</h3>
        <h3 className="text-2xl mt-4">Total Users: {users.length}</h3>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subscription Status</th>
                  <th>Roll</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <AllUserTable
                    key={user._id}
                    index={index}
                    user={user}
                    refetch={refetch}
                  ></AllUserTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllUser;
