import React from "react";
import { Mainsection1Wrap } from "../main/mainComponentStyle";
import { myLoader } from "../asset/myLoader";
import Image from "next/image";
import { Program1Wrap } from "../program/ProgramStyle";
import { SupportSection1Wrap } from "./supportStyle";

const SupportSection1 = ({ goAppliedTeacher }) => {
  return (
    <SupportSection1Wrap>
      <div className="container">
        <div className="piting">
          <h1>
            <span>믿을 수 있는 발달 파트너,</span>
            <span>똑똑쌤이 되어주세요.</span>
          </h1>

          <span>똑똑쌤에서 새로운 커리어를 만들어보세요.</span>
        </div>

        <div className="btn-group">
          <Image loader={myLoader} layout="responsive" objectFit="cover" src="/imgs/programimg.png" alt="me" width="360px" height="386px" />

          <div className="btn">
            <button onClick={goAppliedTeacher}>지금 바로 똑똑쌤을 찾아보세요</button>
          </div>
        </div>
      </div>
    </SupportSection1Wrap>
  );
};

export default SupportSection1;
