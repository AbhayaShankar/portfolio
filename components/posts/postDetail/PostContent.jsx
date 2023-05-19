import React, { useContext } from "react";
// import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import { md } from "../../../helpers/markdown-it";
import { Context } from "../../../context/context";

const PostContent = ({ post }) => {
  const { title, image, content, slug } = post;
  const { setIsMenuActive } = useContext(Context);

  const imagePath = `/posts/${slug}/${image}`;

  const displayContent = md.render(content);

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <div
        dangerouslySetInnerHTML={{ __html: displayContent }}
        className={classes.markdownContent}
        onClick={() => setIsMenuActive(false)}
      />
    </article>
  );
};

export default PostContent;
