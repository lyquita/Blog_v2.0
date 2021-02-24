import React from 'react';
import SinglePost from "./SinglePost"

export default function Writing(props) {
    console.log("props from parent", props)

    // limited posts show in the index page
    const limitedPosts = props.posts.filter((post)=>post.id<6)


    return (
        <div >
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
        </div>
    )
}
