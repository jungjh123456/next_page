import React from "react";
import { Mainsection1Wrap } from "../main/mainComponentStyle";
import { myLoader } from "../asset/myLoader";
import Image from "next/image";
import { Program1Wrap } from "./ProgramStyle";
const ProgramSection1 = ({ applicationBtn }) => {
  return (
    <Program1Wrap>
      <div className="container">
        <div className="piting">
          <h1>
            <span>편안한 집에서</span>
            <span>홈티칭 시작해보세요.</span>
          </h1>

          <span>우리아이가 가장 편안하게 느끼는 공간에서,</span>
        </div>

        <div className="btn-group">
          <Image loader={myLoader} layout="responsive" objectFit="cover" src="/imgs/programimg.png" alt="me" width="360px" height="386px" />

          <div className="btn">
            <button onClick={applicationBtn}>지금 바로 똑똑쌤을 찾아보세요</button>
          </div>
        </div>
      </div>
    </Program1Wrap>
  );
};

export default ProgramSection1;
