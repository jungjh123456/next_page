import React from "react";
import ApplicationHeader from "../asset/ApplicationHeader";
import BigButton from "../asset/BigButton";
import Input from "../asset/Input";
import Progress from "../asset/Progress";
import RadioInput from "../asset/RadioInput";
import { BabyInfoWrap } from "./applicationstyle";

const BabyInfo = ({ percent }) => {
  return (
    <>
      <ApplicationHeader message={"아동정보"} white />
      <BabyInfoWrap>
        <div className="container">
          <div className="progress">
            <Progress prevPercent={percent} percent={percent} />
          </div>
          <h1>아동정보를 알려주세요</h1>
          <div className="input-wrap">
            <Input label="아동 이름" type="text" placeholder="홍길동" />
          </div>
          <div className="input-wrap">
            <Input label="아동 이름" type="text" placeholder="홍길동" />
          </div>
          <div className="radio-check">
            <span>아동성별</span>
            <div className="radio_group">
              <RadioInput id="gender_women" type="radio" label="여아" name="gender" />
              <RadioInput id="gender_men" type="radio" label="남아" name="gender" />
            </div>
          </div>
          <div className="radio-check">
            <span>발달셀터 방문여부</span>
            <div className="radio_group">
              <RadioInput id="center_no" type="radio" label="아니오" name="is_center" />
              <RadioInput id="center_yes" type="radio" label="예" name="is_center" />
            </div>
          </div>
          <div className="radio-check">
            <span>발달센터 방문여부</span>
            <div className="radio_group">
              <RadioInput id="check" type="radio" label="아니오" name="is_check" />
              <RadioInput id="check" type="radio" label="예" name="is_check" />
            </div>
          </div>
          <div className="btn-group">
            <BigButton>넘어가기</BigButton>
          </div>
        </div>
      </BabyInfoWrap>
    </>
  );
};

export default BabyInfo;
