import { useLoaderData } from "react-router-dom";
import AllPosts from "../AllPosts/AllPosts";
import AllTags from "../AllTags/AllTags";
import Banner from "../Banner/Banner";

const Home = () => {
  const { count } = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <AllTags></AllTags>
      <AllPosts count={count}></AllPosts>
    </div>
  );
};

export default Home;
