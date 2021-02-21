import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import styles from "../../../styles/MyThinking.module.css";

export default function SingleThinking() {
  return (
    <div>
      <Card className={styles.container}>
        <CardMedia
          image="https://picsum.photos/500/500"
          className={styles.image}
        />
        <CardContent>
          <Typography>
            hello world hello world hello worldhello world hello world hello
            world hello worldhello world
          </Typography>
          <Typography variant="caption">
            2021.02.12
            <p>#daily thinking</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
