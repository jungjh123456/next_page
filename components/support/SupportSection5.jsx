import React from "react";
import IconWhiting from "../asset/IconWhiting";
import { SupportSection5Wrap } from "./supportStyle";
import Link from "next/dist/client/link";
const SupportSection5 = () => {
  return (
    <SupportSection5Wrap>
      <div className="container">
        <h2>똑똑쌤 등록절차</h2>
        <div className="register_way">
          <IconWhiting />
          <div>
            <h3>신청서 작성</h3>
            <span>홈페이지에서 신청서를 작성하면 운영팀이 연락 드려요.</span>
          </div>
        </div>
        <div className="register_way">
          <IconWhiting />
          <div>
            <h3>사전미팅</h3>
            <span>운영팀과 사전 미팅 및 안내, 계약서 작성을 진행해요</span>
          </div>
        </div>
        <div className="register_way">
          <IconWhiting />
          <div>
            <h3>등록대기</h3>
            <span>서류검토와 프로필 등록이 완료되면 매칭 준비 완료!</span>
          </div>
        </div>
        <div className="register_way">
          <IconWhiting />
          <div>
            <h3>똑똑쌤 매칭진행</h3>
            <span>원하는 지역과 시간에 맞는 수업을 매칭받아요.</span>
          </div>
        </div>
      </div>
    </SupportSection5Wrap>
  );
};

export default SupportSection5;
