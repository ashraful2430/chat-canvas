import PropTypes from "prop-types";
import useUser from "../../Hooks/useUser";

const AnnouncementCard = ({ ann }) => {
  const { name, email, title, img, details } = ann;
  const [users] = useUser();
  return (
    <div>
      <div className="card h-full  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="flex items-center gap-4">
            <img className="w-14 h-14 rounded-full" src={img} alt="" />
            <div>
              <p>{name}</p>
              <p>{email}</p>
            </div>
          </div>
          {users?.role === "admin" && (
            <>
              <div>
                <button className="btn w-full btn-error text-white">
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

AnnouncementCard.propTypes = {
  ann: PropTypes.object,
};

export default AnnouncementCard;
