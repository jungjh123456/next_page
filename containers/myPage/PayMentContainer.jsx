import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppliHeader from "../../components/asset/AppliHeader";
import ArrowIcon from "../../components/asset/ArrowIcon";
import MainHeader from "../../components/asset/MainHeader";
import { hoursListTime, timeDate } from "../../lib/api/timeDate";
import { getPaymentList } from "../../redux/reducers/modules/myPage";
import { AppliedContainerWrap } from "./myPageStyle";
const PayMentContainer = () => {
  const dispatch = useDispatch();
  const {
    myPage: { paymentList },
  } = useSelector(({ myPage }) => ({ myPage }));
  useEffect(() => {
    dispatch(getPaymentList());
  }, []);
  const history = useRouter();
  const goInfo = (e) => {
    if (e.target.dataset.status === "결제대기") {
      return;
    }
    if (e.target.dataset.status === "결제완료") {
      history.push(`/myPage/payment_log/${e.target.dataset.id}`);
      return;
    }
  };
  return (
    <AppliedContainerWrap>
      <MainHeader white applied />
      <div className="container">
        <h2>결제 내역</h2>
        <div className="applied_wrap">
          {paymentList?.map((item) => {
            return (
              <div onClick={goInfo} data-id={item.id} data-status={item.status} className="card1">
                <div data-id={item.id} data-status={item.status}>
                  <span data-id={item.id} data-status={item.status}>
                    {item.text}
                  </span>
                  <span data-id={item.id} data-status={item.status}>
                    {timeDate(item.date)} | {hoursListTime(item.date)}
                  </span>
                  <span data-id={item.id} data-status={item.status} style={item.status === "결제대기" ? { color: "#FF3535" } : { color: "#6100FF" }}>
                    {item.status}
                  </span>
                </div>
                <ArrowIcon id={item.id} dataStatus={item.status} />
              </div>
            );
          })}
        </div>
      </div>
    </AppliedContainerWrap>
  );
};

export default PayMentContainer;
