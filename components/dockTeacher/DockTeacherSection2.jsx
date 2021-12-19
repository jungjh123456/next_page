import React from "react";
import { MainSection5Wrap } from "../main/mainComponentStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { DockTeacherSection2wrap } from "./dockTeacherStyle";
const DockTeacherSection2 = () => {
  return (
    <DockTeacherSection2wrap>
      <div className="container">
        <h2>믿을 수 있는 아동발달 전문가 똑똑쌤</h2>
        <div className="reason-text">
          <span>소중한 우리아이 성장을 위한</span>
          <span>
            <span>똑똑</span>쌤을 만나보세요!
          </span>
        </div>
        <div className="slider">
          <div>
            <div>
              <Image loader={myLoader} src="/imgs/sliderteacher.png" layout="responsive" objectFit="contain" alt="me" width="264" height="254" />
              <div>
                <div>
                  <span>강명실 치료사</span>
                  <span>12년차 언어치료사</span>
                  <span>#아동발달센터 #언어재활 #아동전문</span>
                </div>
              </div>
            </div>
            <div>
              <Image loader={myLoader} src="/imgs/sliderteacher.png" layout="responsive" objectFit="contain" alt="me" width="264" height="254" />
              <div>
                <div>
                  <span>강명실 치료사</span>
                  <span>12년차 언어치료사</span>
                  <span>#아동발달센터 #언어재활 #아동전문</span>
                </div>
              </div>
            </div>
            <div>
              <Image loader={myLoader} src="/imgs/sliderteacher.png" layout="responsive" objectFit="contain" alt="me" width="264" height="254" />
              <div>
                <div>
                  <span>강명실 치료사</span>
                  <span>12년차 언어치료사</span>
                  <span>#아동발달센터 #언어재활 #아동전문</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DockTeacherSection2wrap>
  );
};

export default DockTeacherSection2;
