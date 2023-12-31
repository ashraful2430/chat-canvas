import PropTypes from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const SharePost = ({ _id }) => {
  const shareUrl = `https://chat-canvas-725c3.web.app/post-details/${_id}`;
  const { user } = useAuth();
  const isLoggedIn = !!user;
  const handleShowAlert = () => {
    Swal.fire({
      title: "Sorry!",
      text: "You need to login first",
      icon: "error",
    });
  };
  return (
    <>
      {isLoggedIn ? (
        <div className="flex items-center gap-3">
          <div>
            {" "}
            <p className="text-xl">Share With:</p>
          </div>
          <div>
            <FacebookShareButton
              className="mr-3"
              url={shareUrl}
              quote={"Post title"}
            >
              <FacebookIcon size={40} round={true}></FacebookIcon>
            </FacebookShareButton>
            <RedditShareButton
              className="mr-3"
              url={shareUrl}
              quote={"Post title"}
            >
              <RedditIcon size={40} round={true}></RedditIcon>
            </RedditShareButton>
            <WhatsappShareButton url={shareUrl} quote={"Post title"}>
              <WhatsappIcon size={40} round={true}></WhatsappIcon>
            </WhatsappShareButton>
          </div>
        </div>
      ) : (
        <>
          <div onClick={handleShowAlert} className="flex items-center gap-3 ">
            <div>
              {" "}
              <p className="text-xl">Share With:</p>
            </div>
            <div>
              <FacebookShareButton
                className="mr-3"
                url={shareUrl}
                disabled
                quote={"Post title"}
              >
                <FacebookIcon size={40} round={true}></FacebookIcon>
              </FacebookShareButton>
              <RedditShareButton
                className="mr-3"
                url={shareUrl}
                disabled
                quote={"Post title"}
              >
                <RedditIcon size={40} round={true}></RedditIcon>
              </RedditShareButton>
              <WhatsappShareButton url={shareUrl} disabled quote={"Post title"}>
                <WhatsappIcon size={40} round={true}></WhatsappIcon>
              </WhatsappShareButton>
            </div>
          </div>
        </>
      )}
    </>
  );
};

SharePost.propTypes = {
  _id: PropTypes.string,
};

export default SharePost;
