import PropTypes from "prop-types";
import { FaCommentAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const PostTable = ({ post, index, refetch }) => {
  const { title, _id, upVote, downVote } = post;
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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
            refetch();
          }
        });
      }
    });
  };
  return (
    <>
      <tr data-aos="zoom-in-up">
        <th>{index + 1}</th>
        <td>{title}</td>
        <td>Up votes:{upVote}</td>
        <td>Down votes:{downVote} </td>
        <td>
          <Link to={`/dashboard/comments/${_id}`}>
            <button>
              <FaCommentAlt className="text-3xl ml-3 text-blue-500" />
            </button>
          </Link>
        </td>
        <td>
          <button onClick={() => handleDelete(_id)}>
            <MdDeleteForever className="text-3xl  text-blue-500" />
          </button>
        </td>
      </tr>
    </>
  );
};

PostTable.propTypes = {
  post: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};

export default PostTable;
