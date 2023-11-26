import Lottie from "lottie-react";
import usePosts from "../../Hooks/usePosts";
import loading from "../../assets/loading.json";
import Container from "../../Shared/Container/Container";
import AllPostCard from "./AllPostCard";

const AllPosts = () => {
  const [posts, isPending] = usePosts();
  if (isPending) {
    return (
      <Lottie
        className="w-56 flex justify-center items-center mx-auto h-[40vh]"
        animationData={loading}
      ></Lottie>
    );
  }
  return (
    <>
      <div className="mt-10">
        <Container>
          <div>
            <h3 className="text-center text-3xl font-medium">All Posts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <AllPostCard key={post._id} post={post}></AllPostCard>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default AllPosts;
