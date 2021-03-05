import React from "react";
import styles from "../../../styles/Facts.module.css";

import Button from "@material-ui/core/Button";
import SingleFactsCard from "./SingleFactsCard";
import Link from "next/link";

export default function RandomFacts() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SingleFactsCard />
        <SingleFactsCard />
        <SingleFactsCard />
        <SingleFactsCard />
      </div>
    
        <Link href="/randomFacts">
        <Button>More </Button>
        </Link>
        </div>
  );
}
