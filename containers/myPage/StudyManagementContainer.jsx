import React, { useEffect } from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import ArrowIcon from "../../components/asset/ArrowIcon";
import { StudyManageMentContainerWrap } from "./myPageStyle";

import NextIcon from "../../components/asset/NextIcon";
import MainHeader from "../../components/asset/MainHeader";
import { getStudyManageMentList } from "../../redux/reducers/modules/myPage";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

const StudyManagementContainer = () => {
  const dispatch = useDispatch();
  const {
    myPage: { studyManageMentList },
  } = useSelector(({ myPage }) => ({ myPage }));
  useEffect(() => {
    dispatch(getStudyManageMentList());
  }, []);
  const history = useRouter();
  const goInfo = (e) => {
    if (e.target.dataset.status === "진행중") {
      return;
    }
    if (e.target.dataset.status === "수업종료") {
      history.push(`/myPage/study_management/${e.target.dataset.id}`);
      return;
    }
  };
  return (
    <StudyManageMentContainerWrap>
      <MainHeader white applied />
      <div className="container">
        <h2>수업 관리</h2>
        <div className="study_wrap">
          {studyManageMentList?.map((item) => {
            return (
              <div onClick={goInfo} data-status={item.status} data-id={item.id} className="card">
                <div data-status={item.status} data-id={item.id}>
                  <div data-status={item.status} data-id={item.id}>
                    <span data-status={item.status} data-id={item.id}>
                      {item.text}
                    </span>
                    <span data-status={item.status} data-id={item.id}>
                      {item.counselor} 치료사
                    </span>
                    <span data-status={item.status} data-id={item.id} style={item.status === "진행중" ? { color: "#6100FF" } : {}}>
                      {item?.status}
                    </span>
                  </div>
                  <div data-status={item.status} data-id={item.id}>
                    <div data-status={item.status} data-id={item.id}>
                      <span data-status={item.status} data-id={item.id}>
                        {item.quota}
                      </span>
                      <span data-status={item.status} data-id={item.id}>
                        회권
                      </span>
                    </div>
                  </div>
                </div>
                <div data-status={item.status} data-id={item.id}>
                  <span data-status={item.status} data-id={item.id}>
                    더보기
                  </span>
                  <NextIcon datastatus={item.status} id={item.id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </StudyManageMentContainerWrap>
  );
};

export default StudyManagementContainer;
