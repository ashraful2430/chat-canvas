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
        <td>{comment}</td>
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
    </>
  );
};

ShowCommentTable.propTypes = {
  coment: PropTypes.object,
  index: PropTypes.number,
};

export default ShowCommentTable;
