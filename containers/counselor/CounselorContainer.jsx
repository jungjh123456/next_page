import React from "react";
import ArrowIcon from "../../components/asset/ArrowIcon";
import BigButton from "../../components/asset/BigButton";
import MainHeader from "../../components/asset/MainHeader";
import TalkIcon from "../../components/asset/TalkIcon";
import { CounselorContainerWrap, CounSelorMenuWrap } from "./counselorStyle";

const CounselorContainer = () => {
  return (
    <CounselorContainerWrap>
      <MainHeader white />
      <CounSelorMenuWrap>
        <div className="container">
          <div className="messag-wrap">
            <span>일정 업데이트 7일을 경과</span>하였습니다.
          </div>
          <h1>안녕하세요 장성원 선생님</h1>
          <div className="setting-list">
            <button className="list-click">
              <span>수업가능 일정 및 지역관리</span>
              <ArrowIcon />
            </button>
            <button className="list-click">
              <span>후기관리</span>
              <ArrowIcon />
            </button>
            <button className="list-click">
              <span>수업 스케쥴 및 종료 알림 체크</span>
              <ArrowIcon />
            </button>
          </div>
          <div className="btn-group">
            <BigButton>
              <TalkIcon />
              똑똑쌤에게 익명 건의하기
            </BigButton>
          </div>
        </div>
      </CounSelorMenuWrap>
    </CounselorContainerWrap>
  );
};

export default CounselorContainer;
