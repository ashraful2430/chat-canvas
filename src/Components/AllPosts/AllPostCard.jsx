import PropTypes from "prop-types";

const AllPostCard = ({ post }) => {
  const { title, authorName, authorEmail, tag, details, date, authorImg } =
    post;
  return (
    <>
      <div className="card  bg-base-100 shadow-xl hover:shadow-2xl mt-10">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p className="badge badge-outline mt-5 bg-blue-500 text-white">
            #{tag}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div>
              <img className="w-14 rounded-full" src={authorImg} alt="" />
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
            <p>Total Comments: 0</p>
            <p>Total Votes:0</p>
          </div>
        </div>
      </div>
    </>
  );
};

AllPostCard.propTypes = {
  post: PropTypes.object,
};

export default AllPostCard;
