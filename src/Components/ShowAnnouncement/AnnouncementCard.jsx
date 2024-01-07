import PropTypes from "prop-types";
import useUser from "../../Hooks/useUser";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import Aos from "aos";
import { useEffect } from "react";

const AnnouncementCard = ({ ann, refetch }) => {
  const { name, email, title, img, details, _id } = ann;
  const [users] = useUser();
  const axiosSecure = useAxiosSecure();
  const handleDeleteAnnouncement = (id) => {
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
        axiosSecure.delete(`/announcement/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your post has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="card h-full  bg-base-100 shadow-xl z-0">
        <div data-aos="zoom-in" className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="flex items-center gap-4">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src={img}
              alt=""
            />
            <div>
              <p>{name}</p>
              <p>{email}</p>
            </div>
          </div>
          {users?.role === "admin" && (
            <>
              <div>
                <button
                  onClick={() => handleDeleteAnnouncement(_id)}
                  className="btn w-full btn-error text-white"
                >
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
  refetch: PropTypes.func,
};

export default AnnouncementCard;
