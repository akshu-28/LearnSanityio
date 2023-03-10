import axios from "axios";
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
    //-----------------------
    const response = await axios.post(
        'https://os8rkoc3.api.sanity.io/v1/auth/token',
        {
            email: "email",
            password: "password",
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    if (response.status === 200) {
        const accessToken = response.data.accessToken;
        return accessToken;
    } else {
        throw new Error('Failed to login');
    }



};

export default Watchlist;