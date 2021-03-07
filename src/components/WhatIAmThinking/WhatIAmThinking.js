import React from "react";

import Category from "./Category";
import MyThinking from "./MyThinking";
import styles from "../../../styles/WhatIAm.module.css";

export default function WhatIAmThinking(props) {
  const limitedThinkings = props.thinkings.filter((item)=> item.id<6)
  console.log('limited',limitedThinkings)
  return (
    <div>
      <div>
        {/* <Category /> */}
        {
          limitedThinkings.map((item,index)=>{
            return (
              <MyThinking thinking = {item} key={index}/>
            )
          })
        }
      </div>
    </div>
  );
}
