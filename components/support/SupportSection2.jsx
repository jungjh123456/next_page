import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { DockTeacherSection5wrap } from "../dockTeacher/dockTeacherStyle";
import { SupportSection2Wrap } from "./supportStyle";
const SupportSection2 = () => {
  return (
    <SupportSection2Wrap>
      {" "}
      <div className="container">
        <h2>
          <span>수업에만 집중할 수 있도록,</span>
          <span>
            <span>똑똑쌤을 케어</span>합니다.
          </span>
        </h2>
        <div className="study_text">
          <span>똑똑쌤들은 오로지 아이들의 건강한</span>
          <span>발달교육과 치료에만 집중하세요!</span>
        </div>
        <div className="study_way">
          <h3>
            <span>1.</span>
            <span>체험수업 신청</span>
          </h3>
          <div>
            <span>우리동네 똑똑쌤이 방문하여 아이의</span>
            <span>발달상태를 체크하고 상담을 진행해요!</span>
          </div>
          <Image loader={myLoader} src="/imgs/babyTeacher.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
        <div className="study_way">
          <h3>
            <span>2.</span>
            <span>피드백 및 커리큘럼 확인</span>
          </h3>
          <div>
            <span>체험수업을 통해 확인한 발달상태에</span>
            <span>알맞는 맞춤형 커리큘럼을 받아보세요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/babyTeacher.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
        <div className="study_way">
          <h3>
            <span>3.</span>
            <span>합리적인 등록권 선택</span>
          </h3>
          <div>
            <span>커리큘럼과 체험수업을 통해</span>
            <span>가장 알맞는 등록권을 선택해보세요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/babyTeacher.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
        <div className="study_way">
          <h3>
            <span>1.</span>
            <span>지속적인 관리 시스템 경험</span>
          </h3>
          <div>
            <span>꾸준히 오래받는 수업만큼 똑똑 매니저가</span>
            <span>정기적으로 똑똑쌤 수업을 관리합니다.</span>
          </div>
          <Image loader={myLoader} src="/imgs/babyTeacher.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
      </div>
    </SupportSection2Wrap>
  );
};

export default SupportSection2;
