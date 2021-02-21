import React from "react";

import Category from "./Category";
import MyThinking from "./MyThinking";
import styles from "../../../styles/WhatIAm.module.css";

export default function WhatIAmThinking() {
  return (
    <div>
      <div>
        <h1> ? </h1>
        <h1>What Am I Thinking About</h1>
      </div>
      <div>
        <Category />
        <MyThinking />
      </div>
    </div>
  );
}
