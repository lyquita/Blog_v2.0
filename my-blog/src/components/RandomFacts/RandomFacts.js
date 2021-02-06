import React from "react";
import styles from "../../../styles/Facts.module.css";

import { Button, Box } from "grommet";
import { More } from "grommet-icons";

import SingleFactsCard from "./SingleFactsCard";

export default function RandomFacts() {
  return (
    <div className={styles.container}>
      <h2>Random facts of me</h2>
      <div className={styles.content}>
        <SingleFactsCard />
        <SingleFactsCard />
        <SingleFactsCard />
        <SingleFactsCard />
      </div>
      <Box
        fill="vertical"
        overflow="auto"
        align="center"
        flex="grow"
        justify="center"
        direction="row"
      >
        <Button icon={<More />} hoverIndicator />
      </Box>
    </div>
  );
}
