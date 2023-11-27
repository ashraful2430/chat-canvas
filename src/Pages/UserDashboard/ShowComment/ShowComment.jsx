import { Link, useLoaderData } from "react-router-dom";
import Container from "../../../Shared/Container/Container";
import useIndividualComment from "../../../Hooks/useIndividualComment";
import ShowCommentTable from "./ShowCommentTable";

const ShowComment = () => {
  const posts = useLoaderData();
  const { _id } = posts;
  const [comments, isPending] = useIndividualComment(_id);
  console.log(comments);
  if (isPending) {
    return <p>loading</p>;
  }
  return (
    <div>
      <Container>
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
                  {comments.map((coment) => (
                    <ShowCommentTable
                      key={coment._id}
                      coment={coment}
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
