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

  const shareUrl = `abhayablog.vercel.app/posts/${slug}`;
  console.log(shareUrl);

  const displayContent = md.render(content);

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} shareUrl={shareUrl} />
      <div
        dangerouslySetInnerHTML={{ __html: displayContent }}
        className={classes.markdownContent}
        onClick={() => setIsMenuActive(false)}
      />
    </article>
  );
};

export default PostContent;
