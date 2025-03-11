import React, { Fragment } from "react";
import PostContent from "../../components/posts/postDetail/PostContent";
import { getPostsData, getPostsFiles } from "../../lib/posts-utils";
import Head from "next/head";
import { convertHyphenToCapitalized } from "../../lib/camelCase";

const SinglePostPage = ({ post }) => {
  const imagePath = `/blogs/${post.slug}/${post.image}`;

  const extractKeywords = (content) => {
    // Define a list of common words to exclude (stop words)
    const stopWords = new Set([
      "a",
      "an",
      "the",
      "is",
      "are",
      "in",
      "of",
      "to",
      "for",
      "and",
      "on",
      "that",
      "this",
      "it",
      "be",
      "as",
      "with",
      "you",
      "will",
      "be",
    ]);

    // Extract text from the content (remove markdown formatting)
    const textContent = content.replace(/##/g, "").replace(/`/g, "");

    // Split the text into words and filter out stop words
    const words = textContent
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => !stopWords.has(word));

    // Count word occurrences
    const wordCounts = {};
    words.forEach((word) => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    // Sort words by frequency
    const sortedWords = Object.entries(wordCounts)
      .sort(([, countA], [, countB]) => countB - countA)
      .map(([word]) => word);

    // Take the top N most frequent words as keywords (e.g., top 10)
    const topN = 10;
    const keywords = sortedWords.slice(0, topN).join(", ");

    return keywords;
  };

  return (
    <Fragment>
      <Head>
        <title>{convertHyphenToCapitalized(post.slug)} - Abhaya Shankar</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={extractKeywords(post.content)} />
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
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "${post.title}",
              "image": "https://www.abhayashankar.com${imagePath}",
              "description": "${post.excerpt}",
              "datePublished": "${post.date}",
              "author": {
                "@type": "Person",
                "name": "Abhaya Shankar"
              }
            }
          `}
        </script>
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
