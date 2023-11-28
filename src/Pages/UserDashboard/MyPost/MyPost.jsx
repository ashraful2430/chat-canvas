import Lottie from "lottie-react";
import useSpecificPost from "../../../Hooks/useSpecificPost";
import Container from "../../../Shared/Container/Container";
import loading from "../../../assets/loading.json";
import PostTable from "./PostTable";

const MyPost = () => {
  const [posts, isPending, refetch] = useSpecificPost();
  if (isPending) {
    return (
      <Lottie
        className="w-52 flex justify-center items-center mx-auto h-screen"
        animationData={loading}
      ></Lottie>
    );
  }

  return (
    <div>
      <Container>
        <h3 className="text-center text-3xl font-medium mt-10">My Posts</h3>
        <div>
          {posts.length === 0 ? (
            <>
              <div className="text-center mt-10 font-medium text-3xl">
                You have not Posted yet{" "}
              </div>
            </>
          ) : (
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Post Title</th>
                    <th>Up votes</th>
                    <th>Down votes</th>
                    <th>Comment</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {posts.map((post, index) => (
                    <PostTable
                      key={post._id}
                      index={index}
                      post={post}
                      refetch={refetch}
                    ></PostTable>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MyPost;
