import React from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import { PaymentInfocontainerWrap } from "./myPageStyle";

const PaymentInfoContainer = () => {
  return (
    <PaymentInfocontainerWrap>
      <AppliHeader white />
      <div className="container">
        <h2>결제정보를 확인해주세요.</h2>
        <span>결제일시 2021.10.17 | 15:37</span>
        <div>
          <h2>언어 발달 자극 프로그램</h2>
          <div className="program_wrap">
            <div>
              <span>담당 치료사</span>
              <span>강영실 선생님</span>
            </div>
            <div>
              <span>이용권</span>
              <span>체험이용권</span>
            </div>
            <div>
              <span>주문자 성명</span>
              <span>김한나 (박서현 아동)</span>
            </div>
          </div>

          <h3>최종 결제 금액</h3>
          <div className="cost_wrap">
            <div>
              <span>할인혜택</span>
              <span>첫 체험할인 60%</span>
            </div>
            <div>
              <span>총 결제금액</span>
              <span>42,900원</span>
            </div>
          </div>
        </div>
      </div>
    </PaymentInfocontainerWrap>
  );
};

export default PaymentInfoContainer;
