import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    RedditShareButton,
    RedditIcon
} from "react-share";

const SharePost = () => {
    const shareUrl = 'https://www.facebook.com/watch/?ref=tab'
    return (
        <div className="flex items-center gap-3">
            <div> <p className="text-xl">Share With:</p></div>
            <div>
                <FacebookShareButton className="mr-3" url={shareUrl} quote={'Post title'}>
                    <FacebookIcon size={40} round={true}></FacebookIcon>
                </FacebookShareButton>
                <RedditShareButton className="mr-3" url={shareUrl} quote={'Post title'}>
                    <RedditIcon size={40} round={true}></RedditIcon>
                </RedditShareButton>
                <WhatsappShareButton url={shareUrl} quote={'Post title'}>
                    <WhatsappIcon size={40} round={true}></WhatsappIcon>
                </WhatsappShareButton>
            </div>
        </div>
    );
};

export default SharePost;