import React from "react";
import SingleThinking from "./SingleThinking";

export default function MyThinking(props) {
  return (
    <div>
      <SingleThinking thinking = {props.thinking} />
    </div>
  );
}
