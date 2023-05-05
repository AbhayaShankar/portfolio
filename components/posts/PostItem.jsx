import React from "react";
import classes from "./PostItem.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const textCount = excerpt.length;

  const imagePath = `/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={275}
            height={200}
            // layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <time>{formattedDate}</time>
          <h3>{title}</h3>
          <p className={textCount > 150 ? classes.ellipsis : ""}>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
