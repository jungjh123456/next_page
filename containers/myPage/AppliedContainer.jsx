import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AppliHeader from "../../components/asset/AppliHeader";
import ArrowIcon from "../../components/asset/ArrowIcon";
import MainHeader from "../../components/asset/MainHeader";
import { hoursListTime, timeDate } from "../../lib/api/timeDate";
import { getappliedList } from "../../redux/reducers/modules/myPage";
import { AppliedContainerWrap } from "./myPageStyle";

const AppliedContainer = () => {
  const dispatch = useDispatch();
  const {
    myPage: { appliedList },
  } = useSelector(({ myPage }) => ({ myPage }));
  useEffect(() => {
    dispatch(getappliedList());
  }, []);
  console.log(appliedList);
  return (
    <AppliedContainerWrap>
      <AppliHeader white />
      <div className="container">
        <h2>신청서 내역</h2>
        <div className="applied_wrap">
          {appliedList?.map((item) => {
            return (
              <div style={{ cursor: "pointer" }} className="card1">
                <div>
                  <span>{item.text}</span>
                  <span>
                    {timeDate(item.date)} | {hoursListTime(item.date)}
                  </span>
                  <span style={item.status === "작성중" ? { color: "#FF3535" } : { color: "#6100FF" }}>{item.status}</span>
                </div>
                <ArrowIcon />
              </div>
            );
          })}
        </div>
      </div>
    </AppliedContainerWrap>
  );
};

export default AppliedContainer;
