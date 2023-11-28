import PropTypes from "prop-types";
import { useState } from "react";
import { MdOutlineReportProblem } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ShowCommentTable = ({ coment, index }) => {
  const axiosSecure = useAxiosSecure();
  const { commentUser, commentEmail, comment } = coment;
  const [selectedFeedback, setSelectedFeedback] = useState("");
  const [isReportButtonActive, setIsReportButtonActive] = useState(false);
  const slicedComment =
    comment.length > 20 ? `${comment.slice(0, 20)}...` : comment;

  const handleFeedbackSelect = (event) => {
    const feedbackValue = event.target.value;
    setSelectedFeedback(feedbackValue);
    setIsReportButtonActive(!!feedbackValue);
  };

  const handleSubmitReport = async () => {
    const reportInfo = {
      selectedFeedback,
      commentEmail,
      commentUser,
      comment,
    };
    const submitReport = await axiosSecure.post("/report", reportInfo);
    if (submitReport.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your report has submitted successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    console.log(reportInfo);
    setSelectedFeedback("");
    setIsReportButtonActive(false);
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{commentUser}</td>
        <td>{commentEmail}</td>
        <td>
          {slicedComment}{" "}
          {comment.length > 20 && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() =>
                document.getElementById(`commentModal_${index}`).showModal()
              }
            >
              Read More
            </span>
          )}
        </td>
        <td>
          <select
            name="feedback"
            id="feedback"
            value={selectedFeedback}
            onChange={handleFeedbackSelect}
          >
            <option disabled value="">
              Select feedBack
            </option>
            <option value="Keep It Positive">Keep It Positive</option>
            <option value="Thanks for your lovely feedback">
              Thanks for your lovely feedback
            </option>
            <option value="Great contribution">Great contribution</option>
          </select>
        </td>
        <td>
          <button
            disabled={!isReportButtonActive}
            onClick={handleSubmitReport}
            className={`text-3xl ${
              isReportButtonActive ? "text-red-500" : "text-gray-500"
            }`}
          >
            <MdOutlineReportProblem />
          </button>
        </td>
      </tr>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id={`commentModal_${index}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Comment</h3>
          <p className="py-4">{comment}</p>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() =>
                document.getElementById(`commentModal_${index}`).close()
              }
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

ShowCommentTable.propTypes = {
  coment: PropTypes.object,
  index: PropTypes.number,
};

export default ShowCommentTable;
