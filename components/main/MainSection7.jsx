import React from "react";
import { MainSection7wrap } from "./mainComponentStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
const MainSection7 = () => {
  return (
    <MainSection7wrap>
      <div className="container">
        <h2>똑똑쌤의 생생한 후기</h2>
        <div className="reason-text">
          <span>똑똑쌤을 선택한</span>
          <span>
            똑똑맘의 <span>생생한 수업후기</span>
          </span>
        </div>
        <div className="img-wrap">
          <Image loader={myLoader} src="/imgs/Mobile_Coupon.png" layout="responsive" alt="me" width="208px" height="276px" />
        </div>
        <div className="btn-group">
          <button>할인받고 체험수업 신청하기</button>
        </div>
      </div>
    </MainSection7wrap>
  );
};

export default MainSection7;
