import React, { Fragment } from "react";
import PostContent from "../../components/posts/postDetail/PostContent";
import { getPostsData, getPostsFiles } from "../../lib/posts-utils";
import Head from "next/head";

const SinglePostPage = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.slug} - Abhaya Shankar</title>
        <meta name="description" content={post.excerpt} />
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
