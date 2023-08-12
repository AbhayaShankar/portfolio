import React from "react";
import classes from "./PostHeader.module.css";
import Image from "next/image";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const PostHeader = ({ image, title, shareUrl, timeToRead, date }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <span className={classes.time}>
        {timeToRead} min read | {date}
      </span>
      <Image src={image} alt={title} width={800} height={800} />
      Click to Share
      <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <FacebookShareButton url={shareUrl} quote={title} hashtag={"#blog"}>
          <FacebookIcon round={true} size={36} />
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl} quote={title} hashtag={"#blog"}>
          <WhatsappIcon round={true} size={36} />
        </WhatsappShareButton>
        <LinkedinShareButton url={shareUrl} quote={title} hashtag={"#blog"}>
          <LinkedinIcon round={true} size={36} />
        </LinkedinShareButton>
        <TwitterShareButton url={shareUrl} quote={title} hashtag={"#blog"}>
          <TwitterIcon round={true} size={36} />
        </TwitterShareButton>
      </div>
    </header>
  );
};

export default PostHeader;
