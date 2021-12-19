import React from "react";
import CheckIcon from "../asset/CheckIcon";
import { DockTeacherSection4wrap } from "./dockTeacherStyle";

const DockTeacherSection4 = () => {
  return (
    <DockTeacherSection4wrap>
      <div className="container">
        <h2>
          <span>똑똑쌤의 꼼꼼한</span>
          <span>3단계 검증 프로세스</span>
        </h2>

        <div className="teacher_text">
          <span>집에서도 검증받은 치료사 선생님과</span>
          <span>준비된 아동발달 프로그램을 만나보세요!</span>
        </div>
        <div className="check_box">
          <h3>서류검증</h3>
          <div>
            <div>
              <CheckIcon />
              <span>전문 발달교육 및 치료경력 3년 이상 검증</span>
            </div>
            <div>
              <CheckIcon />
              <span>아동 발달재활 관련 공인자격증 취득검증</span>
            </div>
            <div>
              <CheckIcon />
              <span>아동 발달재활 관련 학위 취득 검증</span>
            </div>
          </div>
        </div>
        <div className="check_box">
          <h3>교육과정</h3>
          <div>
            <div>
              <CheckIcon />
              <span>전문 발달교육 및 치료경력 3년 이상 검증</span>
            </div>
          </div>
        </div>
        <div className="check_box">
          <h3>사후관리</h3>
          <div>
            <div>
              <CheckIcon />
              <span>전문 발달교육 및 치료경력 3년 이상 검증</span>
            </div>
          </div>
        </div>
      </div>
    </DockTeacherSection4wrap>
  );
};

export default DockTeacherSection4;
