import styles from "../styles/Home.module.css";

import Navigation from "../src/common/Navigation"
import MoodIndicator from "../src/components/MoodIndicator";
import RandomFacts from "../src/components/RandomFacts/RandomFacts";
import WhatIAmThinking from "../src/components/WhatIAmThinking/WhatIAmThinking";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <div>
        <h1>Hi</h1>
        <h1>I'm Hireoo</h1>
        <MoodIndicator />
      </div>
      <div className={styles.whoAmI}>
        <h1>?</h1>
        <h1>WHO AM I</h1>
        <RandomFacts />
      </div>
      <div className={styles.whatIThink}>
        <WhatIAmThinking />
      </div>
    </div>
  );
}
