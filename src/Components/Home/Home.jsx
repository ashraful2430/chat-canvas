import { useLoaderData } from "react-router-dom";
import AllPosts from "../AllPosts/AllPosts";
import AllTags from "../AllTags/AllTags";
import Banner from "../Banner/Banner";
import { useState } from "react";

const Home = () => {
  const { count } = useLoaderData();
  const [search, setSearch] = useState("");
  const handleSearch = (searchText) => {
    setSearch(searchText);
  };
  console.log(search);

  return (
    <div>
      <Banner onSearch={handleSearch}></Banner>
      <AllTags></AllTags>
      <AllPosts count={count} search={search}></AllPosts>
    </div>
  );
};

export default Home;
