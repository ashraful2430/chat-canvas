import AllPosts from "../AllPosts/AllPosts";
import AllTags from "../AllTags/AllTags";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllTags></AllTags>
      <AllPosts></AllPosts>
    </div>
  );
};

export default Home;
