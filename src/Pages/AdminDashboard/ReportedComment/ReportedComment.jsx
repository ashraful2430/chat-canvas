import useReportComments from "../../../Hooks/useReportComments";
import Container from "../../../Shared/Container/Container";
import ReportTable from "./ReportTable";

const ReportedComment = () => {
  const [report, isPending] = useReportComments();
  if (isPending) {
    return <p>loading</p>;
  }
  console.log(report);
  return (
    <>
      <Container>
        <h3 className="text-center mt-10 text-2xl font-medium mb-10">
          Reported Comments
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
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
            <tbody>
              {report.map((repo, index) => (
                <ReportTable
                  key={repo._id}
                  index={index}
                  repo={repo}
                ></ReportTable>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default ReportedComment;
