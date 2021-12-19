import React, { useEffect } from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import ArrowIcon from "../../components/asset/ArrowIcon";
import { ReviewContainerWrap, StudyManageMentContainerWrap } from "./myPageStyle";
import { timeDate } from "../../lib/api/timeDate";
import NextIcon from "../../components/asset/NextIcon";
import MainHeader from "../../components/asset/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentList, getReviewList } from "../../redux/reducers/modules/myPage";
import { useRouter } from "next/dist/client/router";

const ReviewContainer = () => {
  const dispatch = useDispatch();
  const {
    myPage: { reviewList },
  } = useSelector(({ myPage }) => ({ myPage }));
  useEffect(() => {
    dispatch(getReviewList());
  }, []);
  const history = useRouter();
  const goInfo = (e) => {
    history.push(`/myPage/review_log/${e.target.dataset.id}?status=${e.target.dataset.status}`);
  };
  return (
    <ReviewContainerWrap>
      <MainHeader white applied />
      <div className="container">
        <h2>후기 관리</h2>
        <div className="study_wrap">
          {reviewList?.map((item) => {
            return (
              <div onClick={goInfo} data-status={item.status} data-id={item.id} className="card">
                <div data-status={item.status} data-id={item.id}>
                  <div data-status={item.status} data-id={item.id}>
                    <span data-status={item.status} data-id={item.id}>
                      {item.text}
                    </span>
                    <span data-status={item.status} data-id={item.id}>
                      {timeDate(item.start_date)} - {timeDate(item.end_date)}
                    </span>
                    <span data-status={item.status} data-id={item.id}>
                      {item.counselor} 선생님
                    </span>
                  </div>
                </div>
                <div data-status={item.status} data-id={item.id}>
                  <span data-status={item.status} data-id={item.id}>
                    {item.status ? "작성완료" : "후기 작성하기"}
                  </span>
                  <NextIcon datastatus={item.status} id={item.id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ReviewContainerWrap>
  );
};

export default ReviewContainer;
