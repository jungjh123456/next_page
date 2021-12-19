import React from "react";
import { MainSection7wrap } from "../main/mainComponentStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { DockTeacher6Wrap } from "./dockTeacherStyle";
const DockTeacherSection6 = () => {
  return (
    <DockTeacher6Wrap>
      <div className="container">
        {/* <h2>똑똑쌤의 생생한 후기</h2> */}
        <h2 className="reason-text">
          <span>똑똑쌤 체험수업을 통해</span>
          <span>
            <span>합리적인 결정</span>하세요
          </span>
        </h2>
        <div className="img-wrap">
          <Image loader={myLoader} src="/imgs/Mobile_Coupon.png" layout="responsive" alt="me" width="208px" height="276px" />
        </div>
        <div className="btn-group">
          <button>할인받고 체험수업 신청하기</button>
        </div>
      </div>
    </DockTeacher6Wrap>
  );
};

export default DockTeacherSection6;
