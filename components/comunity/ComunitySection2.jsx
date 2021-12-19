import React from "react";
import { ComunitySection2Wrap } from "./comunityStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";

const ComunitySection2 = () => {
  return (
    <ComunitySection2Wrap>
      <div className="container">
        <div className="tab_list-wrap">
          <div>
            <input type="radio" id="tab1" name="tabs" />
            <label htmlFor="tab1">
              <span>✍️</span>
              <span>발달칼럼</span>
            </label>
            <input type="radio" id="tab2" name="tabs" />
            <label htmlFor="tab2">
              <span>💬</span>
              <span>똑똑맘 후기</span>
            </label>
            <input type="radio" id="tab3" name="tabs" />
            <label htmlFor="tab3">
              <span>👂🏼</span>
              <span>똑똑쌤 인터뷰</span>
            </label>
            <input type="radio" id="tab4" name="tabs" />
            <label htmlFor="tab4">
              <span>📣</span>
              <span>공지사항</span>
            </label>
          </div>
        </div>
        <div className="card-wrap">
          <div className="card">
            <Image loader={myLoader} src="/imgs/blank.png" layout="responsive" objectFit="contain" alt="me" width="320" height="240" />
            <div>
              <h2>우리아이 정말 발달이 늦은걸까요?</h2>
              <div className="text">
                <span>또래보다 말이 늦은 우리아이, 주변에서는 조금 있으면 말이 터진다고 예민한 엄마 취급을 받아요. 괜찮을까요?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComunitySection2Wrap>
  );
};

export default ComunitySection2;
