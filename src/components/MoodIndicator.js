import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { css } from "@emotion/react"


const marks = [
  {
    value: 0,
    label: "😔",
  },
  {
    value: 20,
    label: "😥",
  },
  {
    value: 40,
    label: "🙂",
  },
  {
    value: 60,
    label: "🤒",
  },
  {
    value: 80,
    label: "😋",
  },
  {
    value: 100,
    label: "🥳",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function MoodIndicator() {

  return (
    <div css={css`
      width:300px;
    `}>
      <Typography id="discrete-slider-custom" gutterBottom style={{fontSize:18}}>
        I feel good now
      </Typography>
      <Slider
        defaultValue={40}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={20}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
}
