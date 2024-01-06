import PropTypes from "prop-types";
import Lottie from "lottie-react";
import loading from "../../assets/loading.json";
import Container from "../../Shared/Container/Container";
import AllPostCard from "./AllPostCard";
import { useState } from "react";
import usePosts from "../../Hooks/usePosts";

const AllPosts = ({ count, search }) => {
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const totalPage = Math.ceil(count / itemPerPage);
  const pages = [...Array(totalPage).keys()];
  const [posts, isPending] = usePosts(currentPage, itemPerPage, search, sortBy);
  console.log(posts);
  const handleSortByPopularity = () => {
    setSortBy("popularity");
    setCurrentPage(0);
  };

  if (isPending) {
    return (
      <Lottie
        className="w-56 flex justify-center items-center mx-auto h-[40vh]"
        animationData={loading}
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
    <>
      <div className="mt-10">
        <Container>
          <div>
            <h3 className="text-center text-3xl font-medium">All Posts</h3>
          </div>
          <div>
            <button
              onClick={handleSortByPopularity}
              className="btn btn-outline"
            >
              Most Popular Posts
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <AllPostCard key={post._id} post={post}></AllPostCard>
            ))}
          </div>
          <div className="text-center mt-20 ">
            <button
              onClick={handlePrevPage}
              className="btn btn-square bg-blue-500 text-white"
            >
              Prev
            </button>
            {pages.map((page, index) => (
              <button
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
        </Container>
      </div>
    </>
  );
};

AllPosts.propTypes = {
  count: PropTypes.number,
  search: PropTypes.string,
};

export default AllPosts;
