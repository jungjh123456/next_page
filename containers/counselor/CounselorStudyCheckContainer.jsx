import React, { useEffect, useState } from "react";
import ApplicationHeader from "../../components/asset/ApplicationHeader";
import { timeTodayInfofullDate } from "../../lib/api/timeDate";
import { CounSelorStudyCheckWrap } from "./counselorStyle";

const CounselorStudyCheckContainer = () => {
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    if (pageNum < 0) {
      setPageNum(2);
      return;
    }
    if (pageNum > 2) {
      setPageNum(0);
      return;
    }
  }, [pageNum]);
  const slickleftClick = (e) => {
    setPageNum((state) => state - 1);
  };
  const slickrightClick = (e) => {
    setPageNum((state) => state + 1);
  };

  return (
    <CounSelorStudyCheckWrap>
      <ApplicationHeader message={"수업 일정"} white notoggle />
      <div className="container">
        <div className="time_list">
          <div className="left-btn">
            {pageNum === 2 ? (
              <button data-set="left"></button>
            ) : (
              <button onClick={slickleftClick} data-set="left">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.00015614 6L6.00016 -6.16331e-08L7.41016 1.41Z" fill="black" />
                </svg>
              </button>
            )}
          </div>
          <h2>
            {+pageNum === 0 && timeTodayInfofullDate(new Date())}
            {+pageNum === 1 && timeTodayInfofullDate(new Date())}
            {+pageNum === 2 && timeTodayInfofullDate(new Date())} 수업일정
          </h2>
          <div className="right-btn">
            {pageNum === 1 ? (
              <button data-set="right"></button>
            ) : (
              <button onClick={slickrightClick} data-set="right">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z" fill="black" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="study_no-list">
          <span>수업예정 및 미체크</span>
          <div>
            <div className="card">
              <div>
                <span>12/24회차 수업 미체크</span>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z" fill="#fff" />
                </svg>
              </div>
              <div>
                <span>김소연 오전 10시 30분</span>
                <span>정규수업</span>
              </div>
            </div>
            <div className="card">
              <div className="expected">
                <span>12/24회차 수업 미체크</span>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z" fill="#fff" />
                </svg>
              </div>
              <div>
                <span>김소연 오전 10시 30분</span>
                <span>정규수업</span>
              </div>
            </div>
          </div>
        </div>
        <div className="study_no-list">
          <span>수업체크 완료</span>
          <div>
            <div className="card">
              <div className="complete">
                <span>12/24회차 수업 미체크</span>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z" fill="#fff" />
                </svg>
              </div>
              <div>
                <span>김소연 오전 10시 30분</span>
                <span>정규수업</span>
              </div>
            </div>
            <div className="card">
              <div className="complete">
                <span>12/24회차 수업 미체크</span>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 1.68141e-08L7.99984 6L1.99984 12L0.589844 10.59Z" fill="#fff" />
                </svg>
              </div>
              <div>
                <span>김소연 오전 10시 30분</span>
                <span>정규수업</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CounSelorStudyCheckWrap>
  );
};

export default CounselorStudyCheckContainer;
