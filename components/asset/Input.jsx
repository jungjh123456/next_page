import React from "react";
import { InputWrap } from "./assetStyle";

const Input = (props) => {
  return (
    <InputWrap>
      <span>{props.label}</span>
      <input type={props.type} placeholder={props.placeholder} onChange={props?.onChange} name={props.name} />
    </InputWrap>
  );
};

export default Input;
