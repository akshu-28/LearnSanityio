import React, { useEffect, useState } from "react";
// import imageUrlBuilder from "@sanity/image-url";
import create from "@sanity/client";


const Watchlist = ({ posts }) => {
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
                        <h1 className="my-5">{post["symbolName"]}</h1>
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
    const config = {
        dataset: "production",
        projectId: "os8rkoc3",
        apiVersion: "2021-10-21",
        token: "skROuL5AKgvCL4T7imvHYgdIamfpg1YkzqJkbNMv0z9sKRuqvB1fYxXu2U9BxHWubEOHgwvd9HaUe8FN6lxt6YxF95VSfnhi7jJnkMQ7dhkKRWaKUlpJYD2l6pG5kqot9eURQfqIsbgELciRTn41yR9egsVgs1xc4B7WBcYL9tW1cOx1NsfN",
        useCdn: false,
    };

    const client = create(config);




    //--------------------
    /*     try {
    
            await client
                .create({
                    _type: "watchlist",
                    symbolName: "Akshu",
                    ltp: "130.71",
                    cp: "0.57%",
                    change: "+0.74",
                })
                .then((res) => {
                    console.log(`Todo was created, document ID is ${res._id}`);
                });
    
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: "Error, check console" });
        } */
    //---------------
    const data = await client
        .fetch('*[ _type == "watchlist" ]')
        ;
    /*  const data = await fetch(url).then((res) => res.json());
     const posts = data.result;
     console.log(posts[0]["body"]); */
    console.log(data);
    const posts = data;

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

export default Watchlist;