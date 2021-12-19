import React from "react";
import { useEffect } from "react";
import { ComunityInfoWrap } from "./comunityStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
const CommunityInfo = () => {
  //   console.log(window);
  // comunityimg;
  return (
    <ComunityInfoWrap>
      <div className="container">
        <h1>
          <span>발달칼럼</span>
          <span>우리아이 정말 발달이 늦은걸까요?</span>
        </h1>
        <div className="date">
          <span>2021.12.02</span>
        </div>
        <Image loader={myLoader} layout="responsive" objectFit="cover" src="/imgs/comunityimg.png" alt="me" width="360px" height="260" />
        <div className="info_description">
          <span>
            한림대학교동탄성심병원 소아청소년과 김성구 교수는 보건복지부 지원으로 진행한 ‘장애아동 의료비 지원 사업연구’에서 이 같은 내용을 13일 밝혔다.{`\n\n`} 김 교수는 2013년 10월부터 2019년
            10월까지 한림대학교동탄성심병원, 고려대학교병원, 한양대학교병원 등 3개 대학병원에서 발달장애로 진단받은 627명을 분석했으며, 나이는 대부분 6세 미만이었다. {`\n\n`}분석결과, 전체
            발달장애아동 627명 중 62.5%인 392명이 만 0~2세였으며, 국내에서는 장애판정이 불가능한 만 0~1세 아동이 전체 32%인 202명을 차지했다. 장애유형별로는 전반적 발달장애는 40% 이상이,
            운동발달장애는 98%가 만 0~1세였다.
          </span>
        </div>
        <div className="quest_text">
          <h2>Q. 부모가 늦었다면 아이도 반드시 늦을까요?</h2>
          <div className="info_description">
            <span>
              {" "}
              한림대학교동탄성심병원 소아청소년과 김성구 교수는 보건복지부 지원으로 진행한 ‘장애아동 의료비 지원 사업연구’에서 이 같은 내용을 13일 밝혔다.{`\n\n`} 김 교수는 2013년 10월부터 2019년
              10월까지 한림대학교동탄성심병원, 고려대학교병원, 한양대학교병원 등 3개 대학병원에서 발달장애로 진단받은 627명을 분석했으며, 나이는 대부분 6세 미만이었다. {`\n\n`}분석결과, 전체
              발달장애아동 627명 중 62.5%인 392명이 만 0~2세였으며, 국내에서는 장애판정이 불가능한 만 0~1세 아동이 전체 32%인 202명을 차지했다. 장애유형별로는 전반적 발달장애는 40% 이상이,
              운동발달장애는 98%가 만 0~1세였다.
            </span>
          </div>
        </div>
        <Image loader={myLoader} layout="responsive" objectFit="cover" src="/imgs/comunityimg.png" alt="me" width="360px" height="260" />
        <div className="quest_text_two">
          <h2>Q. 부모가 늦었다면 아이도 반드시 늦을까요?</h2>
          <div className="info_description">
            <span>
              {" "}
              한림대학교동탄성심병원 소아청소년과 김성구 교수는 보건복지부 지원으로 진행한 ‘장애아동 의료비 지원 사업연구’에서 이 같은 내용을 13일 밝혔다.{`\n\n`} 김 교수는 2013년 10월부터 2019년
              10월까지 한림대학교동탄성심병원, 고려대학교병원, 한양대학교병원 등 3개 대학병원에서 발달장애로 진단받은 627명을 분석했으며, 나이는 대부분 6세 미만이었다. {`\n\n`}분석결과, 전체
              발달장애아동 627명 중 62.5%인 392명이 만 0~2세였으며, 국내에서는 장애판정이 불가능한 만 0~1세 아동이 전체 32%인 202명을 차지했다. 장애유형별로는 전반적 발달장애는 40% 이상이,
              운동발달장애는 98%가 만 0~1세였다.
            </span>
          </div>
        </div>
      </div>
    </ComunityInfoWrap>
  );
};

export default CommunityInfo;
