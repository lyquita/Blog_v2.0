import React from "react";
import SinglePost from "./SinglePost";
import Link from "next/link";

export default function Writing(props) {
  // limited posts show in the index page
  const limitedPosts = props.posts.filter((post) => post.id < 6);

  return (
    <div>
      {limitedPosts.map((post, index) => {
        return (
          <Link href={`/post/${post.Slug}`}>
            <a>
              <SinglePost post={post} key={index} />
            </a>
          </Link>
        );
      })}
    </div>
  );
}
