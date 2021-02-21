import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Category() {
  const classes = useStyles();
  return (

      <div>
        <Chip
          variant="outlined"
          color="primary"
          avatar={<Avatar>F</Avatar>}
          label="Daily thinking"
          style={{ marginBottom: 10 }}
          clickable
        />
        <Chip
          variant="outlined"
          color="primary"
          avatar={<Avatar>F</Avatar>}
          label="100 ideas of earning money"
          style={{ marginBottom: 10 }}
          clickable
        />
        <Chip
          variant="outlined"
          color="primary"
          avatar={<Avatar>F</Avatar>}
          label="Product experience"
          style={{ marginBottom: 10 }}
          clickable
        />
      </div>

  );
}
