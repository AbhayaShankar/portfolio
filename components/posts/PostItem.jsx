import React, { Fragment, useContext } from "react";
import classes from "./PostItem.module.css";
import Link from "next/link";
import Image from "next/image";
import { Context } from "../../context/context";

const PostItem = (props) => {
  const { setIsMenuActive } = useContext(Context);
  const { title, image, excerpt, date, slug, isPublished } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const textCount = excerpt.length;

  const trimmedText = excerpt.substr(0, 150);

  const imagePath = `/blogs/${slug}/${image}`;

  return (
    <Fragment>
      {isPublished ? (
        // For published blog
        <li className={classes.post} onClick={() => setIsMenuActive(false)}>
          <Link href={`/blogs/${slug}`}>
            <div className={classes.image}>
              <Image src={imagePath} alt={title} width={300} height={200} />
            </div>
            <div className={classes.content}>
              {isPublished ? (
                <time>{formattedDate}</time>
              ) : (
                <time>Coming soon...</time>
              )}
              <h3>{title}</h3>
              {textCount > 140 ? <p>{trimmedText}...</p> : <p>{excerpt}</p>}
            </div>
          </Link>
        </li>
      ) : (
        // UnPublished blog
        <li className={classes.post2} onClick={() => setIsMenuActive(false)}>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            {isPublished ? (
              <time>{formattedDate}</time>
            ) : (
              <time>Coming soon...</time>
            )}
            <h3>{title}</h3>
            {textCount > 140 ? <p>{trimmedText}...</p> : <p>{excerpt}</p>}
          </div>
        </li>
      )}
    </Fragment>
  );
};

export default PostItem;
