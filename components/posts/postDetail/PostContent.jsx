import React, { useContext } from "react";
// import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import { md } from "../../../helpers/markdown-it";
import { Context } from "../../../context/context";
import moment from "moment";

const PostContent = ({ post }) => {
  const { title, image, content, slug, date } = post;
  const { setIsMenuActive } = useContext(Context);

  const imagePath = `/posts/${slug}/${image}`;

  const day = moment(date, "YYYY-MM-DD");
  const formattedDate = day.format("MMMM DD, YYYY");

  const shareUrl = `abhayablog.vercel.app/posts/${slug}`;

  const words = content.split(" ").length;
  const timeToRead = words / 200;

  const displayContent = md.render(content);

  return (
    <article className={classes.content}>
      <PostHeader
        date={formattedDate}
        timeToRead={timeToRead}
        title={title}
        image={imagePath}
        shareUrl={shareUrl}
      />
      <div
        dangerouslySetInnerHTML={{ __html: displayContent }}
        className={classes.markdownContent}
        onClick={() => setIsMenuActive(false)}
      />
    </article>
  );
};

export default PostContent;
