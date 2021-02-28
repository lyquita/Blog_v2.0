import styles from "../styles/Home.module.css";
import Link from "next/link";

import Navigation from "../src/common/Navigation";
import MoodIndicator from "../src/components/MoodIndicator";
import RandomFacts from "../src/components/RandomFacts/RandomFacts";
import WhatIAmThinking from "../src/components/WhatIAmThinking/WhatIAmThinking";
import Writing from "../src/components/Writing/Writing";
import { css } from "@emotion/react";

export default function Home({ posts }) {
  console.log("propos", posts);
  return (
    <div
      css={css`
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 24px;
      `}
    >
      <Navigation />
      <div>
        <h1>Hi</h1>
        <h1>I'm Hireoo</h1>
        <MoodIndicator />
      </div>
      <div className={styles.whoAmI}>
        <h1>?</h1>
        <h1>WHO AM I</h1>
        <Link href="/randomFacts">
          <a>
            <h2>Random facts of me</h2>
          </a>
        </Link>
        <RandomFacts />
      </div>
      <div className={styles.whatIThink}>
        <div>
          <h1> ? </h1>
          <Link href="/thinking">
            <a>
              <h1>What Am I Thinking About</h1>
            </a>
          </Link>
        </div>
        <WhatIAmThinking />
      </div>
      <div className={styles.Writing}>
        <Link href="/post/allPost">
          <a>
            <h1>Writing</h1>
          </a>
        </Link>
        <Writing posts={posts} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
}
