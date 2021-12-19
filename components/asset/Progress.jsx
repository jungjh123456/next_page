import React from "react";
import { ProgressWrap } from "./progressStyle";

const Progress = ({ percent, prevPercent }) => {
  return (
    <ProgressWrap prevPercent={prevPercent} percent={percent}>
      <div data-percent={percent}></div>
      <span>{Math.floor(percent)}%</span>
    </ProgressWrap>
  );
};

export default Progress;
