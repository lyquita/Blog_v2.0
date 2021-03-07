import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "../../../styles/Facts.module.css";

export default function SimpleCard() {
  const bull = <span className={styles.bullet}>•</span>;

  return (
    <Card className={`${styles.content}${styles.cardWidth}`} style={{marginBottom:20}}>
      <CardContent className={styles.singlerCardContainer}>
          well meaning and kindly.well meaning and kindly.well meaning and
          kindly.
      </CardContent>
    </Card>
  );
}
