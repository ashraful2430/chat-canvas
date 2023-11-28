import { Link, useLoaderData } from "react-router-dom";
import Container from "../../../Shared/Container/Container";
import useIndividualComment from "../../../Hooks/useIndividualComment";
import ShowCommentTable from "./ShowCommentTable";
import commentLoading from "../../../assets/comment-loading.json";
import Lottie from "lottie-react";

const ShowComment = () => {
  const posts = useLoaderData();
  const { _id } = posts;
  const [comments, isPending] = useIndividualComment(_id);
  console.log(comments);
  if (isPending) {
    return (
      <Lottie
        animationData={commentLoading}
        className="w-40 flex justify-center items-center mx-auto min-h-screen"
      ></Lottie>
    );
  }
  if (!Array.isArray(comments)) {
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
        <div className="text-center mt-10 font-bold text-2xl">
          Your Post comments
        </div>
        {comments.length === 0 ? (
          <>
            <div className="min-h-[50vh] flex flex-col justify-center items-center  w-full">
              <p className="text-2xl font-medium">
                There is no Comment in your post
              </p>
              <Link to={"/"}>
                <button className="btn btn-outline mt-3">Go Home</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="text-3xl font-medium mt-4">{posts.title}</div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Comment</th>
                    <th>Feedback</th>
                    <th>Report</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map((coment, index) => (
                    <ShowCommentTable
                      key={coment._id}
                      coment={coment}
                      index={index}
                      posts={posts}
                    ></ShowCommentTable>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default ShowComment;
