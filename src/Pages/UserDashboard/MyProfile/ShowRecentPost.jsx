import PropTypes from "prop-types";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const ShowRecentPost = ({ post }) => {
  const {
    title,
    authorName,
    authorEmail,
    tag,
    details,
    date,
    authorImg,
    upVote,
    downVote,
  } = post;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="card  bg-base-100 shadow-xl hover:shadow-2xl mt-10">
        <div data-aos="zoom-in" className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p className="">#{tag}</p>
          <div className="mt-4 w-full flex items-center gap-2">
            <div>
              <img className="w-24 h-14 rounded-full" src={authorImg} alt="" />
            </div>
            <div className="font-medium">
              <p>{authorName}</p>
              <p>{authorEmail}</p>
            </div>
          </div>
          <div>
            <p className="mt-2 font-medium">
              Publish Date: {date.slice(0, 10)}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <p>Total Up votes: {upVote}</p>
            <p>Total Votes:{downVote}</p>
          </div>
        </div>
      </div>
    </>
  );
};

ShowRecentPost.propTypes = {
  post: PropTypes.object,
};

export default ShowRecentPost;
