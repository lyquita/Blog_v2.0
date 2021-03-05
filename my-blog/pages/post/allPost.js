import React from 'react';
import SinglePost from "../../src/components/Writing/SinglePost";
import Link from "next/link";
import Navigation from "../../src/common/Navigation";

export default function allPost({posts}) {
    const allPosts = posts;
    return (
        <div>
            <Navigation />
            {
                allPosts.map((post)=>{
                    return(
                        <Link href={`/post/${post.Slug}`}>
                            <a>
                            <SinglePost post={post}/>
                            </a>
                        </Link>
                    ) 
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