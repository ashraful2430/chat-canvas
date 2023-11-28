import { useLoaderData } from "react-router-dom";
import AllPosts from "../AllPosts/AllPosts";
import AllTags from "../AllTags/AllTags";
import Banner from "../Banner/Banner";
import { useState } from "react";
import ShowAnnouncement from "../ShowAnnouncement/ShowAnnouncement";

const Home = () => {
  const { count } = useLoaderData();
  const [search, setSearch] = useState("");
  const handleSearch = (searchText) => {
    setSearch(searchText);
  };

  return (
    <div>
      <Banner onSearch={handleSearch}></Banner>
      <AllTags></AllTags>
      <AllPosts count={count} search={search}></AllPosts>
      <ShowAnnouncement></ShowAnnouncement>
    </div>
  );
};

export default Home;
