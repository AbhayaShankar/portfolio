import React, { useContext } from "react";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import { md } from "../../../helpers/markdown-it";
import { Context } from "../../../context/context";
import moment from "moment";

const PostContent = ({ post }) => {
  const { title, image, content, slug, date, isPublished } = post;
  const { setIsMenuActive } = useContext(Context);

  const imagePath = `/blogs/${slug}/${image}`;

  const day = moment(date, "YYYY-MM-DD");
  const formattedDate = day.format("MMMM DD, YYYY");

  const shareUrl = `https://www.abhayashankar.com/blogs/${slug}`;

  const words = content.split(" ").length;
  const timeToRead = (words / 180).toPrecision(3);

  const openInNewTab = (html) => {
    const result = html.replace(/<a href+/g, "<a target='_blank' href");
    return result;
  };

  const displayContent =
    content.length > 100
      ? openInNewTab(md.render(content))
      : "<center><h3>This blog is not yet out. Kindly wait and come back later.</h3></center>";

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
