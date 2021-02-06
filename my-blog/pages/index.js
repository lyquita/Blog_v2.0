import styles from "../styles/Home.module.css";

import MoodIndicator from "../src/components/MoodIndicator";
import RandomFacts from "../src/components/RandomFacts/RandomFacts";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Hi</h1>
        <h1>I'm Hireoo</h1>
        <MoodIndicator />
      </div>
      <div className={styles.whoAmI}>
        <p>?</p>
        <p>WHO AM I</p>
      </div>
      <RandomFacts />
    </div>
  );
}
