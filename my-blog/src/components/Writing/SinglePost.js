import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
      marginBottom:20,
  },
}));

export default function SinglePost(props) {
  console.log("single post", props.post)
  const post = props.post
  const classes = useStyles();
  return (
    <div>
    <Card className={classes.card}>
      <CardHeader
        title={post.Title}
        subheader={post.Publish}
      />
    </Card>
    </div>
  );
}
