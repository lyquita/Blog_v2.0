import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { css } from "@emotion/react"


export default function Category() {
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
