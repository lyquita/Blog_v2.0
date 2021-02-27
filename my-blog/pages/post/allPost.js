import React from 'react'
import SinglePost from "../../src/components/Writing/SinglePost"

export default function allPost({posts}) {
    const allPosts = posts;
    console.log('all', posts);
    return (
        <div>
            {
                allPosts.map((post, index)=>{
                    return <SinglePost post={post} key={index}/>
                })
            }
        </div>
    )
}

export async function getStaticProps(){
    // get posts from our api
    const res = await fetch("http://localhost:1337/posts");
    const posts = await res.json();
    return{
      props: { posts }
    };
  }