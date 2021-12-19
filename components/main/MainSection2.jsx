import React from "react";
import { Mainsection2Wrap } from "./mainComponentStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";

import Link from "next/link";
import PlusIcon from "../asset/PlusIcon";
const MainSection2 = () => {
  return (
    <Mainsection2Wrap>
      <div className="container">
        <div className="heading-text">
          <h2>똑똑쌤의 3단계 검증절차</h2>
          <div>
            <span>우리아이의 발달 상태,</span>
            <span>
              <span>검증된 전문가 선생님</span>이
            </span>
            <span>보셔야하지 않을까요?</span>
          </div>
        </div>
        <Image loader={myLoader} src="/imgs/teacherimg.png" objectFit="contain" alt="me" width="320" height="333" />
        <div className="tab-menu">
          <input type="radio" id="chk1" name="tabs" />
          <label htmlFor="chk1">
            <Image loader={myLoader} src="/imgs/tabimg1.png" objectFit="contain" alt="me" width="24" height="24" />
            <span>서류검증</span>
          </label>
          <input type="radio" id="chk2" name="tabs" />
          <label htmlFor="chk2">
            <Image loader={myLoader} src="/imgs/tabimg2.png" objectFit="contain" alt="me" width="24" height="24" />
            <span>교육과정</span>
          </label>
          <input type="radio" id="chk3" name="tabs" />
          <label htmlFor="chk3">
            {" "}
            <Image loader={myLoader} src="/imgs/tabimg3.png" objectFit="contain" alt="me" width="24" height="24" />
            <span>사유관리</span>
          </label>
        </div>
        <div className="teach-info">
          <div className="info_text">
            <div>
              <span>전문 발달 교육및 치료경력 3년 이상 검증</span>
            </div>
            <div>
              <span>아동 발달체험 관련 공인자격증 취득 검증</span>
            </div>
            <div>
              <span>아동 발달재활 관련 학위 취득 검증</span>
            </div>
          </div>
          <div className="plus-btn">
            <Link href="/dockTeacher">
              <a>
                <span>더보기</span>
                <PlusIcon />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Mainsection2Wrap>
  );
};

export default MainSection2;
