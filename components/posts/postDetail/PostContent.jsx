import React from "react";
// import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import { md } from "../../../helpers/markdown-it";

const PostContent = ({ post }) => {
  const { title, image, content, slug } = post;

  const imagePath = `/posts/${slug}/${image}`;

  const displayContent = md.render(content);

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      {/* <ReactMarkdown
        className={classes.markdownContent}
        components={customRenderers}
        // renderers={customRenderers}
        children={content}
      /> */}
      <div
        dangerouslySetInnerHTML={{ __html: displayContent }}
        className={classes.markdownContent}
      />
    </article>
  );
};

export default PostContent;
