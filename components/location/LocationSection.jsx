import React from "react";
import BigButton from "../asset/BigButton";
import SearchIcon from "../asset/SearchIcon";
import { LocationSectionWrap } from "./locationStyle";

const LocationSection = () => {
  return (
    <LocationSectionWrap>
      <div className="container">
        <h1>방문지역 확인</h1>
        <div className="text-wrap">
          <span>우리동네가 방문수업이 가능한 지역인지</span>
          <span>아래에서 확인해보세요</span>
        </div>
        <div className="search-wrap">
          <div>
            <input type="text" />
            <button>
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="location-wrap">
          <h2>서비스 가능지역</h2>
          <span>업데이트 일자: 2021.11.30</span>
          <div>
            <span>서울</span>
            <div>
              <span>강남구,송파구,서초구,성복구,동대문구</span>
            </div>
          </div>
          <div>
            <span>서울</span>
            <div>
              <span>강남구,송파구,서초구,성복구,동대문구</span>
            </div>
          </div>
        </div>
        <div className="btn-group">
          <BigButton>우리동네가 없다면, 예약을 걸어보세요!</BigButton>
        </div>
      </div>
    </LocationSectionWrap>
  );
};

export default LocationSection;
