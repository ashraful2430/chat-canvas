import useAuth from "../../../Hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return <div></div>;
};

export default MyProfile;
