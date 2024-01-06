import PropTypes from "prop-types";

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
  return (
    <>
      <div className="card  bg-base-100 shadow-xl hover:shadow-2xl mt-10">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p className="">#{tag}</p>
          <div className="mt-4 flex items-center gap-4">
            <div>
              <img className="w-14 h-14 rounded-full" src={authorImg} alt="" />
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
