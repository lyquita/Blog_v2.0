import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom style={{fontSize:18}}>
        Mood Indicator
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
