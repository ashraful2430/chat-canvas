import PropTypes from "prop-types";
import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const AllUserTable = ({ user, index, refetch }) => {
  const { name, email, badge } = user;
  const axiosSecure = useAxiosSecure();

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: `${user.name} is Admin now`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <tr data-cy="user-table-row" data-aos="zoom-in-up" className="hover">
        <th>{index + 1}</th>
        <td data-cy="user-name">{name}</td>
        <td>{email}</td>
        <td data-cy="user-badge">
          {badge === "Gold" ? (
            <>
              <p>Premium member</p>
            </>
          ) : (
            <>
              <p>Normal member</p>
            </>
          )}
        </td>
        <td data-cy="user-role">
          {user?.role === "admin" ? (
            <p className="text-green-600">Admin</p>
          ) : (
            <button
              onClick={() => handleMakeAdmin(user)}
              className="bg-blue-500 p-2 rounded-lg"
            >
              <FaUsers className="text-3xl text-white" />
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

AllUserTable.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};

export default AllUserTable;
