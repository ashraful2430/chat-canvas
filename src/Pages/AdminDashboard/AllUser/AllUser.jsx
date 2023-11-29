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
        <form>
          <div className="flex w-full justify-center items-end mb-6">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label htmlFor="hero-field" className="leading-7 text-sm">
                Search via user name
              </label>
              <input
                type="text"
                id="hero-field"
                name="search"
                className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Search
            </button>
          </div>
        </form>
        <div>
          <div className="overflow-x-auto z-0">
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
