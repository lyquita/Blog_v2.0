import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { css } from "@emotion/react"

export default function SinglePost(props) {
  const post = props.post
  return (
    <div>
    <Card css={css`
      margin-bottom:20px;
    `}>
      <CardHeader
        title={post.Title}
        subheader={post.Publish}
      />
    </Card>
    </div>
  );
}
