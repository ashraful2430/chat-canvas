import { useLoaderData, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
    if (voted !== "up" && user) {
      setUpVoteCount(upVoteCount + 1);
      setDownVoteCount(downVoteCount);
      setVoted("up");
      const upVoteInfo = {
        upVote: upVoteCount + 1,
      };
      const updateVote = await axiosSecure.patch(
        `/posts/upvote/${_id}`,
        upVoteInfo
      );
      console.log(updateVote);
    } else if (voted === "up") {
      setUpVoteCount(upVoteCount - 1);
      const decreaseInfo = { upVote: upVoteCount - 1 };
      const decreaseUpvote = await axiosSecure.patch(
        `/posts/upvote-down/${_id}`,
        decreaseInfo
      );
      console.log(decreaseUpvote);
      setVoted(null);
    } else {
      Swal.fire({
        title: "Sorry!",
        text: "You need to login first",
        icon: "error",
      });
    }
  };

  const handleDownVote = async () => {
    if (voted !== "down" && user) {
      setDownVoteCount(downVoteCount + 1);
      setUpVoteCount(upVoteCount);
      setVoted("down");
      const downVoteInfo = { downVote: downVoteCount + 1 };
      const updateDownVote = await axiosSecure.patch(
        `/posts/downvote/${_id}`,
        downVoteInfo
      );
      console.log(updateDownVote);
    } else if (voted === "down") {
      setDownVoteCount(downVoteCount - 1);
      setVoted(null);
    } else {
      Swal.fire({
        title: "Sorry!",
        text: "You need to login first",
        icon: "error",
      });
    }
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire({
        title: "Sorry!",
        text: "You need to login first",
        icon: "error",
      });
      return;
    }
    const form = e.target;
    const comment = form.comment.value.trim();

    if (!comment || comment.length < 5) {
      Swal.fire({
        title: "Oops!",
        text: "Please enter a comment with at least 5 characters",
        icon: "error",
      });
      return;
    }

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
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/posts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your post has been deleted.",
              icon: "success",
            });
            navigate("/");
          }
        });
      }
    });
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
                    className={`flex items-center gap-3 ${
                      voted === "up" ? "opacity-90 " : ""
                    }`}
                    disabled={voted === "down"}
                  >
                    <AiOutlineLike
                      className={`text-2xl text-blue-500 ${
                        voted === "down" ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    />
                    {upVoteCount}
                  </button>
                  {/* down vote */}
                  <button
                    onClick={handleDownVote}
                    className={`flex items-center gap-3 ${
                      voted === "down" ? "opacity-90" : ""
                    }`}
                    disabled={voted === "up"}
                  >
                    <AiOutlineDislike
                      className={`text-2xl text-red-500 ${
                        voted === "up" ? "opacity-50  cursor-not-allowed" : ""
                      }`}
                    />
                    {downVoteCount}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    className="w-20 h-20 rounded-full object-cover"
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
                <SharePost _id={_id}></SharePost>
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
                  </div>
                  <div>
                    <button className="btn btn-outline mt-3 w-full">
                      Post
                    </button>
                  </div>
                </form>
              </div>
              <div className="">
                {user?.email === authorEmail ? (
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn w-full btn-error"
                  >
                    Delete
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </Container>
      </>
    </div>
  );
};

export default AllPostDetails;
