import produce from "immer";
import { createAction, handleActions } from "redux-actions";

const APPLIEDLIST = "myPage/APPLIEDLIST";
const PAYMENTLIST = "myPage/PAYMENTLIST";
// 신청내역
export const getappliedList = createAction(APPLIEDLIST);
// 결제내역
export const getPaymentList = createAction(PAYMENTLIST);

// 수업관리

const STUDYMANAGEMENTLIST = "myPage/STUDYMANAGEMENTLIST";

export const getStudyManageMentList = createAction(STUDYMANAGEMENTLIST);

// 후기 관리

const REVIEWLIST = "myPage/REVIEWLIST";

export const getReviewList = createAction(REVIEWLIST);
const initialState = {
  appliedList: [],
  paymentList: [],
  studyManageMentList: [],
  reviewList: [],
};

const myPage = handleActions(
  {
    [APPLIEDLIST]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.appliedList = [
          { text: "언어발달 자극 프로그램", date: new Date(), status: "작성중" },
          { text: "언어발달 자극 프로그램", date: new Date(), status: "신청완료" },
        ];
      });
    },
    [PAYMENTLIST]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.paymentList = [
          { id: 32, text: "언어발달 자극 프로그램 (체험권)", date: new Date(), status: "결제대기" },
          { id: 37, text: "언어발달 자극 프로그램 (정기권)", date: new Date(), status: "결제완료" },
          { id: 36, text: "언어발달 자극 프로그램", date: new Date(), status: "결제완료" },
          { id: 35, text: "언어발달 자극 프로그램", date: new Date(), status: "결제완료" },
        ];
      });
    },
    [STUDYMANAGEMENTLIST]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.studyManageMentList = [
          { id: 32, text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", date: new Date(), status: "진행중", quota: "6/12" },
          { id: 37, text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", date: new Date(), status: "수업종료", quota: "6/12" },
          { id: 36, text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", date: new Date(), status: "진행중", quota: "6/12" },
          { id: 35, text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", date: new Date(), status: "진행중", quota: "6/12" },
        ];
      });
    },
    [REVIEWLIST]: (state, { payload }) => {
      return produce(state, (draft) => {
        draft.reviewList = [
          { id: 32, text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", start_date: new Date(), end_date: new Date(), status: false },
          { id: 37, text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", start_date: new Date(), end_date: new Date(), status: false },
          { id: 36, text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", start_date: new Date(), end_date: new Date(), status: true },
          { id: 35, text: "언어발달 자극 프로그램 (체험권)", counselor: "강명실", start_date: new Date(), end_date: new Date(), status: false },
        ];
      });
    },
  },
  initialState
);
export default myPage;
