import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Container from "../../../Shared/Container/Container";
import AllUserTable from "./AllUserTable";
import Lottie from "lottie-react";
import commentLoading from "../../../assets/comment-loading.json";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllUser = () => {
  const { count } = useLoaderData();

  const axiosSecure = useAxiosSecure();
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const totalPage = Math.ceil(count / itemPerPage);
  const pages = [...Array(totalPage).keys()];
  const {
    data: users = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["users", searchText, currentPage, itemPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users?search=${searchText}&page=${currentPage}&size=${itemPerPage}`
      );
      return res.data;
    },
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearchText(search);
    const response = await axiosSecure.get(`/users?search=${search}`);
    console.log(response);
  };
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

  const handleItemPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemPerPage(value);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Container>
        <h3 className="text-center text-3xl font-medium mt-5">All users</h3>
        <h3 className="text-2xl mt-4">Total Users: {users.length}</h3>
        <form onSubmit={handleSearch}>
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
            <table data-cy="user-table" className="table">
              {/* head */}
              <thead data-cy="user-table-head">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subscription Status</th>
                  <th>Roll</th>
                </tr>
              </thead>
              <tbody data-cy="user-table-body">
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
            <div data-cy="pagination" className="text-center mt-20 ">
              <button
                onClick={handlePrevPage}
                className="btn btn-square bg-blue-500 text-white"
              >
                Prev
              </button>
              {pages.map((page, index) => (
                <button
                  id="user-table-button"
                  data-cy=""
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  className={`btn btn-square ml-2 text-white ${
                    currentPage === page ? "bg-purple-500" : "bg-blue-500"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                className="btn btn-square ml-2 bg-blue-500 text-white"
              >
                Next
              </button>
              <select
                className="ml-4 border-2 py-3 px-1 rounded-lg"
                defaultValue={itemPerPage}
                onChange={handleItemPerPage}
                name=""
                id=""
              >
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllUser;
