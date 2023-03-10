import React, { useEffect, useState } from "react";
// import imageUrlBuilder from "@sanity/image-url";
// import { sanityClient } from "../sanityClient";

import PostCard from "../components/PostCard";

const Blog = ({ posts }) => {
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {

      // const imageBuilder = imageUrlBuilder(sanityClient);

      setMappedPosts(
        posts.map((post) => {
          return {
            ...post,
            // mainImage: imageBuilder
            //   .image(post.mainImage)
            //   .width(450)
            //   .height(500),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <div className="container">
      <h1 className="my-5">Blog Page</h1>

      <div className="row">
        {mappedPosts &&
          mappedPosts.length &&
          mappedPosts.map((post, index) => (
            <PostCard data={post} key={index} />
          ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {

  const query = encodeURIComponent(`*[ _type == "post" ]`);
  //5klxzjcj
  // os8rkoc3
  const url = `https://os8rkoc3.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;

  console.log(url);


  const data = await fetch(url).then((res) => res.json());
  const posts = data.result;
  console.log(posts[0]["body"]);

  if (!posts || !posts.length === 0) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};

export default Blog;