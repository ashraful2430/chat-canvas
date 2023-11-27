import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllPostCard = ({ post }) => {
  const { title, authorName, authorEmail, tag, details, date, authorImg, _id } =
    post;
  return (
    <>
      <Link to={`/post-details/${_id}`}>
        <div className="card  bg-base-100 shadow-xl hover:shadow-2xl mt-10">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{details}</p>
            <p className=" mt-5 ">Tag: #{tag}</p>
            <div className="mt-4 flex items-center gap-4">
              <div>
                <img
                  className="w-14 h-14 rounded-full"
                  src={authorImg}
                  alt=""
                />
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
      </Link>
    </>
  );
};

AllPostCard.propTypes = {
  post: PropTypes.object,
};

export default AllPostCard;
