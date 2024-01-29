import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AllPostCard = ({ post }) => {
  const {
    title,
    authorName,
    authorEmail,
    tag,
    details,
    date,
    authorImg,
    _id,
    commentCount,
    upVote,
    downVote,
  } = post;
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);

  return (
    <>
      <Link to={`/post-details/${_id}`}>
        <div className="card h-full  bg-base-100 shadow-xl hover:shadow-2xl mt-10">
          <div data-aos="zoom-in-up" className="card-body">
            <h2 data-cy="post-card-title" className="card-title">
              {title}
            </h2>
            <p data-cy="post-card-details">{details}</p>
            <p data-cy="post-card-tag" className=" mt-5  ">
              Tag: #{tag}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <div>
                <img
                  data-cy="post-card-image"
                  className="w-14 h-14 rounded-full"
                  src={authorImg}
                  alt=""
                />
              </div>
              <div className="font-medium">
                <p data-cy="post-card-name">{authorName}</p>
                <p data-cy="post-card-email">{authorEmail}</p>
              </div>
            </div>
            <div>
              <p data-cy="post-card-date" className="mt-2 font-medium">
                Publish Date: {date.slice(0, 10)}
              </p>
            </div>
            <div className="">
              <p data-cy="post-card-comment"> Comments: {commentCount}</p>
              <div className="flex items-center">
                <p data-cy="post-card-upvote"> up votes :{upVote}</p>
                <p data-cy="post-card-downvote">down votes :{downVote}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

AllPostCard.propTypes = {
  post: PropTypes.object,
};

export default AllPostCard;
