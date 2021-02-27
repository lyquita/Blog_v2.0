import React from 'react';
import SinglePost from "./SinglePost"

export default function Writing(props) {
    console.log("props from parent", props)

    // limited posts show in the index page
    const limitedPosts = props.posts.filter((post)=>post.id<6)

    console.log('limited post', limitedPosts)
    return (
        <div >
        {
            limitedPosts.map((post,index)=>{
                return <SinglePost post={post} key={index}/>
            })
        }
        </div>
    )
}
