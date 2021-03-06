import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import styles from "../../../styles/MyThinking.module.css";

export default function SingleThinking(props) {
  console.log("from top", props);
  const thinking = props.thinking;
  //image exist
  if(thinking.image !== null){
    return (
      <div>
        <Card className={styles.container}>
          <CardMedia
            // image="https://picsum.photos/500/500"
            image={`http://localhost:1337${thinking.image.url}`}
            className={styles.image}
          />
          <CardContent>
            <Typography>{thinking.content}</Typography>
            <Typography variant="caption">
              {thinking.date}
              <p>#{thinking.category}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }else{
    return (
      <div>
        <Card className={styles.container}>
          <CardContent>
            <Typography>{thinking.content}</Typography>
            <Typography variant="caption">
              {thinking.date}
              <p>#{thinking.category}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  
}
