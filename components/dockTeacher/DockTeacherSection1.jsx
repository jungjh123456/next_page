import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { DockTeacherSection1wrap } from "./dockTeacherStyle";
const DockTeacherSection1 = () => {
  return (
    <DockTeacherSection1wrap>
      <div className="container">
        <h1>
          <span>
            <span>똑똑!</span> 집으로 똑똑쌤이
          </span>
          <span>찾아왔어요.</span>
        </h1>
        <div className="teacher_text">
          <span>검증받은 치료사 선생님을 만나보세요.</span>
        </div>
        <div className="img-wrap">
          <Image loader={myLoader} src="/imgs/dockTeacherimg.png" layout="responsive" objectFit="contain" alt="me" width="360" height="386" />
        </div>
      </div>
    </DockTeacherSection1wrap>
  );
};

export default DockTeacherSection1;
