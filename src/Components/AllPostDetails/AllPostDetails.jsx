import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import { FaCommentAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import SharePost from "./SharePost";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCommentCount from "../../Hooks/useCommentCount";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const AllPostDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const postDetails = useLoaderData();
  const {
    title,
    authorName,
    authorEmail,
    tag,
    details,
    date,
    authorImg,
    _id,
    upVote,
    downVote,
  } = postDetails;

  const [comments] = useCommentCount(_id);
  const [upVoteCount, setUpVoteCount] = useState(upVote);
  const [downVoteCount, setDownVoteCount] = useState(downVote);
  const [voted, setVoted] = useState(null);

  const handleUpVote = async () => {
    if (voted !== "up") {
      setUpVoteCount(upVoteCount + 1);
      setVoted("up");
      const upVoteInfo = {
        upVote: upVoteCount + 1,
      };
      const updateVote = await axiosSecure.patch(
        `/posts/upvote/${_id}`,
        upVoteInfo
      );
      console.log(updateVote);
    }
  };

  const handleDownVote = async () => {
    if (voted !== "down") {
      setDownVoteCount(downVoteCount + 1);
      setVoted("down");
      const downVoteInfo = { downVote: downVoteCount + 1 };
      const updateDownVote = await axiosSecure.patch(
        `/posts/downvote/${_id}`,
        downVoteInfo
      );
      console.log(updateDownVote);
    }
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const postId = _id;
    const commentInfo = {
      comment,
      postId,
      commentUser: user.displayName,
      commentEmail: user.email,
    };
    const addComments = await axiosSecure.post("/comments", commentInfo);
    if (addComments.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your post has been added successfully",
        showConfirmButton: false,
        timer: 2000,
      });
      window.location.reload();
      console.log(addComments.data);
    }
  };

  const postDate = new Date(date);
  const formattedDate = postDate.toLocaleDateString();
  const hours = postDate.getHours() % 12 || 12;
  const minutes = postDate.getMinutes();
  const ampm = postDate.getHours() >= 12 ? "PM" : "AM";
  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  return (
    <div>
      <>
        <Container>
          <h3 className="text-center text-3xl mt-5 font-medium">{title}</h3>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="mb-10">{details}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p>Post Date: {formattedDate}</p>
                  <p>Post Time: {formattedTime}</p>
                </div>
                <div>
                  <p className="font-medium">Tag:#{tag}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <FaCommentAlt className="text-blue-500 text-2xl" />
                  <p className="text-xl">{comments.count}</p>
                </div>
                <div className="flex justify-between items-center gap-2 my-5">
                  {/* up vote */}
                  <button
                    onClick={handleUpVote}
                    className={`flex items-center gap-3 `}
                  >
                    <AiOutlineLike className="text-2xl text-blue-500 " />
                    {upVoteCount}
                  </button>
                  {/* down vote */}
                  <button
                    onClick={handleDownVote}
                    className={`flex items-center gap-3`}
                  >
                    <AiOutlineDislike className="text-2xl text-red-500" />
                    {downVoteCount}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    className="w-14 h-14 rounded-full"
                    src={authorImg}
                    alt=""
                  />
                </div>
                <div>
                  <p>{authorName}</p>
                  <p>{authorEmail}</p>
                </div>
              </div>
              <div>
                <SharePost></SharePost>
              </div>
              <div>
                <form onSubmit={handleSubmitPost}>
                  <div>
                    <label
                      htmlFor="Description"
                      className="block text-sm text-gray-500 "
                    >
                      Comment
                    </label>

                    <textarea
                      name="comment"
                      placeholder="Your comment"
                      className="block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
                    ></textarea>

                    <button className="btn btn-outline mt-3">Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </>
    </div>
  );
};

export default AllPostDetails;
