import React, { useContext } from "react";
import classes from "./PostItem.module.css";
import Link from "next/link";
import Image from "next/image";
import { Context } from "../../context/context";

const PostItem = (props) => {
  const { setIsMenuActive } = useContext(Context);
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const textCount = excerpt.length;

  const trimmedText = excerpt.substr(0, 150);

  const imagePath = `/posts/${slug}/${image}`;

  return (
    <li className={classes.post} onClick={() => setIsMenuActive(false)}>
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
          {textCount > 140 ? <p>{trimmedText}...</p> : <p>{excerpt}</p>}
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
