import React, { Fragment } from "react";
import PostContent from "../../components/posts/postDetail/PostContent";
import { getPostsData, getPostsFiles } from "../../lib/posts-utils";
import Head from "next/head";
import { convertHyphenToCapitalized } from "../../lib/camelCase";

const SinglePostPage = ({ post }) => {
  const imagePath = `/blogs/${post.slug}/${post.image}`;

  return (
    <Fragment>
      <Head>
        <title>{convertHyphenToCapitalized(post.slug)} - Abhaya Shankar</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:image"
          content={`https://www.abhayashankar.com${imagePath}`}
        />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:url"
          content={`https://www.abhayashankar.com/blogs/${post.slug}`}
        />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostsData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((file) => file.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: "blocking",
  };
}

export default SinglePostPage;
