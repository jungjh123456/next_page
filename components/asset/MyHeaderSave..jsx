import React from "react";
import Image from "next/image";
import { myLoader } from "./myLoader";
import Toggle from "./Toggle";
import { BackHeaderStyle, MainHeaderStyle, SaveHeaderStyle } from "./headerStyle";
const MyHeaderSave = ({ white }) => {
  return (
    <SaveHeaderStyle style={white ? { background: "#fff" } : {}}>
      <Image loader={myLoader} src="/imgs/backimg.png" objectFit="cover" alt="me" width="24" height="24" />
      <button className="toggle">수정하기</button>
    </SaveHeaderStyle>
  );
};

export default MyHeaderSave;
