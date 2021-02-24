import React from "react";
import styles from "../../../styles/Facts.module.css";

import { Button, Box } from "grommet";
import { More } from "grommet-icons";

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
      <Box
        fill="vertical"
        overflow="auto"
        align="center"
        flex="grow"
        justify="center"
        direction="row"
      >
        <Link href="/randomFacts">
        <Button icon={<More />} hoverIndicator />
        </Link>
      </Box>
    </div>
  );
}
