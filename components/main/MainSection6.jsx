import React from "react";
import PlusIcon from "../asset/PlusIcon";
import { MainSection6Wrap } from "./mainComponentStyle";
import Link from "next/link";
const MainSection6 = () => {
  return (
    <MainSection6Wrap>
      <div className="container">
        <h2>똑똑쌤의 생생한 후기</h2>
        <div className="reason-text">
          <span>똑똑쌤을 선택한</span>
          <span>
            똑똑맘의 <span>생생한 수업후기</span>
          </span>
        </div>
        <div className="card">
          <div className="card1">
            <div>
              <span>똑똑맘</span>
              <div>
                <span>연장 3개월</span>
              </div>
            </div>
            <div>
              <span>쌍둥이라서 항상 걱정이 많았는데 선생님이 너무 잘 아이들과 상호작용을 해주시는 것을 보고 너무 만족했어요! 아이들도 선생님을 너무 좋아서 계속 수업 받아보려구요 :)</span>
            </div>
          </div>
          <div className="card1">
            <div>
              <span>똑똑맘</span>
              <div>
                <span>연장 3개월</span>
              </div>
            </div>
            <div>
              <span>쌍둥이라서 항상 걱정이 많았는데 선생님이 너무 잘 아이들과 상호작용을 해주시는 것을 보고 너무 만족했어요! 아이들도 선생님을 너무 좋아서 계속 수업 받아보려구요 :)</span>
            </div>
          </div>
          <div className="card1">
            <div>
              <span>똑똑맘</span>
              <div>
                <span>연장 3개월</span>
              </div>
            </div>
            <div>
              <span>쌍둥이라서 항상 걱정이 많았는데 선생님이 너무 잘 아이들과 상호작용을 해주시는 것을 보고 너무 만족했어요! 아이들도 선생님을 너무 좋아서 계속 수업 받아보려구요 :)</span>
            </div>
          </div>
        </div>
        <div className="plus-btn">
          <Link href="/">
            <a>
              <span>더보기</span>
              <PlusIcon />
            </a>
          </Link>
        </div>
      </div>
    </MainSection6Wrap>
  );
};

export default MainSection6;
