import React from "react";
import { MainSection3Wrap } from "./mainComponentStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
const MainSection3 = () => {
  return (
    <MainSection3Wrap>
      <div className="container">
        <Image loader={myLoader} src="/imgs/section3.png" layout="responsive" objectFit="contain" alt="me" width="360" height="520" />
      </div>
    </MainSection3Wrap>
  );
};

export default MainSection3;
