import React from "react";
import { ImageWrap, Mainsection1Wrap } from "./mainComponentStyle";
import Image from "next/image";
import sectionBg from "../../style/imgs/sectionBg.png";
import { myLoader } from "../asset/myLoader";
// const myLoader = ({ src, width, quality }) => {
//   return `https://master.d1w0rhvxlv5xov.amplifyapp.com${src}?w=${width}&q=${quality || 75}`;
// };
const MainSection1 = ({ applicationBtn }) => {
  return (
    <Mainsection1Wrap>
      <div className="container">
        <div>
          <h1>
            <span>믿을 수 있는 전문가를</span>
            <span>만날 수 있도록</span>
          </h1>

          <span>찾아가는 아동발달 전문가 플랫폼</span>
        </div>

        <div className="btn-group">
          <Image loader={myLoader} layout="responsive" objectFit="cover" src="/imgs/sectionBgs.png" alt="me" width="360px" height="386px" />
          <div>
            <button onClick={applicationBtn}>지금 바로 똑똑쌤을 찾아보세요</button>
          </div>
        </div>
      </div>
    </Mainsection1Wrap>
  );
};

export default MainSection1;
