import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdOutlineReportProblem } from "react-icons/md";
import "aos/dist/aos.css";
import Aos from "aos";

const ReportTable = ({ repo, index }) => {
  const axiosSecure = useAxiosSecure();
  const { commentUser, commentEmail, comment, title, selectedFeedback } = repo;
  const [selectedFeedbackes, setSelectedFeedback] = useState("");
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
      selectedFeedback: selectedFeedbackes,
      commentEmail,
      commentUser,
      comment,
    };
    const submitReport = await axiosSecure.post("/admin-report", reportInfo);
    if (submitReport.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your report has submitted successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    setSelectedFeedback("");
    setIsReportButtonActive(false);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <tr data-aos="zoom-in" className="hover">
        <th>{index + 1}</th>
        <td>{commentUser}</td>
        <td>{title}</td>
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
        <td>{selectedFeedback}</td>
        <td>
          <select
            name="feedback"
            id="feedback"
            value={selectedFeedbackes}
            onChange={handleFeedbackSelect}
          >
            <option disabled value="">
              Select Actions
            </option>
            <option value="You have been warn">You have been warn</option>
            <option value="You have been blocked for 1 month">
              You have been blocked for 1 month
            </option>
            <option value="You have been removed from this website">
              You have been removed from this website
            </option>
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

ReportTable.propTypes = {
  repo: PropTypes.object,
  index: PropTypes.number,
};

export default ReportTable;
