import { useState } from "react";
import useReportComments from "../../../Hooks/useReportComments";
import Container from "../../../Shared/Container/Container";
import ReportTable from "./ReportTable";
import { useLoaderData } from "react-router-dom";

const ReportedComment = () => {
  const { count } = useLoaderData();
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = Math.ceil(count / itemPerPage);
  const pages = [...Array(totalPage).keys()];
  const [report, isPending] = useReportComments(currentPage, itemPerPage);
  if (isPending) {
    return <p>loading</p>;
  }

  const handleItemPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemPerPage(value);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Container>
        <h3 className="text-center mt-10 text-2xl font-medium mb-10">
          Reported Comments
        </h3>
        <div className="overflow-x-auto">
          <table data-cy="main-table" className="table">
            {/* head */}
            <thead data-cy="reported-head">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Title</th>
                <th>Comment</th>
                <th>Feedback</th>
                <th>Action</th>
                <th>Report</th>
              </tr>
            </thead>
            <tbody id="reported-table-body">
              {report.map((repo, index) => (
                <ReportTable
                  key={repo._id}
                  index={index}
                  repo={repo}
                ></ReportTable>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-20 ">
            <button
              onClick={handlePrevPage}
              className="btn btn-square bg-blue-500 text-white"
            >
              Prev
            </button>
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={`btn btn-square ml-2 text-white ${
                  currentPage === page ? "bg-purple-500" : "bg-blue-500"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className="btn btn-square ml-2 bg-blue-500 text-white"
            >
              Next
            </button>
            <select
              className="ml-4 border-2 py-3 px-1 rounded-lg"
              defaultValue={itemPerPage}
              onChange={handleItemPerPage}
              name=""
              id=""
            >
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ReportedComment;
