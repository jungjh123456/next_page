import React from "react";
import ArrowIcon from "./ArrowIcon";
import { QuestionDropWrap } from "./assetStyle";

const QuestionDrop = (props) => {
  console.log(props);
  return (
    <QuestionDropWrap>
      <div>
        <input type="checkbox" id={props.id} />
        <label className="label-click" htmlFor={props.id}>
          <span>{props?.name}</span>
          <ArrowIcon />
        </label>
        <label htmlFor={props.id} className="text-label">
          <span>{props.value}</span>
        </label>
      </div>
    </QuestionDropWrap>
  );
};

export default QuestionDrop;
