import { useLoaderData } from "react-router-dom";

const ShowComment = () => {
  const posts = useLoaderData();
  console.log(posts);
  return <div></div>;
};

export default ShowComment;
