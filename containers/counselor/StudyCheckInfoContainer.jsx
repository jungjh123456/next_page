import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import ApplicationHeader from "../../components/asset/ApplicationHeader";
import { timeInfofullDate } from "../../lib/api/timeDate";
import { ClassDetailContainerWrap } from "./counselorStyle";

const StudyCheckInfoContainer = () => {
  const { query: parsed } = useRouter();
  const [profileInfo, setProgileInfo] = useState({});
  return (
    <ClassDetailContainerWrap>
      <ApplicationHeader message={"수업일정"} white notoggle />
      <div className="container">
        <div className="grid2">
          <h2>신청정보</h2>
        </div>
        <div className="grid3">
          <span>부모님 성함 / 아동이름 / 출생년도</span>
          <div>
            <div>
              <span>{profileInfo?.customer_name}</span>
            </div>
            <div>
              <span>{profileInfo?.kid_name}</span>
            </div>
            <div>
              <span>{profileInfo?.age_in_months}</span>
            </div>
          </div>
        </div>
        <div className="grid4">
          <span>방문 주소정보</span>
          <div>
            <span>{profileInfo?.address}</span>
          </div>
          <span style={{ marginTop: "16px", display: "block" }}>상세 주소</span>
          <div>
            <span>{profileInfo?.address_detail}</span>
          </div>
        </div>
        <div className="grid5">
          <span>수업일정</span>
          <div>
            <div>
              <span>{timeInfofullDate(profileInfo?.scheduled_datetime)}</span>
            </div>
            <div>
              <span>{parsed?.type === "session" ? "본수업" : profileInfo?.type}</span>
            </div>
          </div>
        </div>
        <div className="grid6">
          <span>아동정보</span>
        </div>
        <div className="grid7">
          <span>성별</span>
          <div>
            <div>
              <span>{profileInfo?.gender}</span>
            </div>
          </div>
        </div>
        <div className="grid8">
          <span>어린이집 동원여부 / 센터 및 병원 치료경험</span>
          <div>
            <div>
              <span>{profileInfo?.is_attending_kindergarten ? "O" : "X"}</span>
            </div>
            <div>
              <span>{profileInfo?.is_diagnosed ? "O" : "X"}</span>
            </div>
          </div>
        </div>
        <div className="grid9">
          <span>아동발달 상태</span>
          <div>{profileInfo?.initial_kid_linguistics}</div>
        </div>
        <div className="grid10">
          <span>아동이 좋아하는 놀이나 장난감</span>
          <div>{profileInfo?.initial_kid_interests}</div>
        </div>
        <div className="grid11">
          <span>릴리프맘 홈티칭 수업 신청 이유</span>
          <div>
            {profileInfo?.expectations?.map((item, i) => {
              return (
                <div key={i}>
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="btn-group">
          <button>수업 종료했어요</button>
        </div>
      </div>
    </ClassDetailContainerWrap>
  );
};

export default StudyCheckInfoContainer;
