import styled from "styled-components";

export const CounSelorMenuWrap = styled.section`
  /* min-height: 100vh; */
  padding-bottom: 24px;
  background: #fff;
  & > .container {
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 100%;
    box-sizing: border-box;
    & > .messag-wrap {
      position: fixed;
      max-width: 450px;

      margin: 0 auto;
      top: 55px;
      width: 100%;
      min-height: 40px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f0eff4;
    }
    margin-top: 156px;
    & > h1 {
      text-align: center;

      padding: 0 20px;
    }
    & > .setting-list {
      width: 100%;
      margin-top: 40px;
      padding: 0 20px;
      box-sizing: border-box;
      & > .list-click {
        width: 100%;
        display: flex;
        align-items: center;

        padding: 16px 14px;
        box-sizing: border-box;
        border-bottom: 1px solid #f0eff4;
        justify-content: space-between;
        & > span {
          font-size: 1rem;
        }
        & > svg {
          transform: rotate(270deg);
        }
      }
    }
    & > .btn-group {
      margin-top: 182px;
      padding: 0 20px;
      box-sizing: border-box;
      & > button {
        & > svg {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const CounSelorStudyDateContainerWrap = styled.div`
  max-width: 450px;
  margin: 0 auto;
  & > .messag-wrap {
    width: 100%;
    min-height: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0eff4;
  }
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 100%;
    box-sizing: border-box;
    & > h1 {
      text-align: center;
      font-size: 1.5rem;
      margin-top: 60px;
      margin-bottom: 24px;
    }
    & > .text-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > span {
        font-size: 0.875rem;
        text-align: center;
        word-break: keep-all;
      }
      margin-bottom: 24px;
    }
    & > .date_description {
      text-align: center;
      word-break: keep-all;
      margin-bottom: 12px;
      & > span {
        font-size: 0.75rem;
        color: #6100ff;
      }
    }
    & > .description {
      display: flex;
      flex-direction: column;
      margin-top: 24px;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
        & > span {
          font-size: 0.875rem;
        }
      }
      & > textarea {
        resize: none;
        width: 100%;
        min-height: 320px;
        box-sizing: border-box;
        /* Background */

        background: #f0eff4;
        /* Gray 40% */

        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        border-radius: 8px;
        padding: 16px;
        font-size: 0.875rem;
        color: #000;
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
    & > .btn-group {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      & > button {
        min-height: 48px;
        &:disabled {
          background: #c9c9c9 !important;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          /* Mobile Body2 */

          font-family: Spoqa Han Sans Neo;
          font-style: normal;
          font-weight: normal;
          font-size: 1rem;
          line-height: 20px;
          /* identical to box height */

          text-align: center;

          /* Gray 40% */

          color: rgba(0, 0, 0, 0.4) !important;
        }
        &:first-child {
          /* White */
          background: #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          /* Mobile Body2 */

          font-family: Spoqa Han Sans Neo;
          font-style: normal;
          font-weight: normal;
          font-size: 1rem;
          line-height: 20px;
          /* identical to box height */

          text-align: center;

          /* Black */

          color: #000000;
          margin-bottom: 16px;
        }
        &:last-child {
          /* Purple */

          background: #6100ff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          /* Mobile Body2 */

          font-family: Spoqa Han Sans Neo;
          font-style: normal;
          font-weight: normal;
          font-size: 1rem;
          line-height: 20px;
          /* identical to box height */

          text-align: center;

          /* White */

          color: #ffffff;
        }
      }
    }
  }
`;

export const CounSelorReviewContainerWrap = styled.div`
  & > .messag-wrap {
    width: 100%;
    min-height: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0eff4;
  }
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 100%;
    box-sizing: border-box;
    & > h1 {
      text-align: center;
      font-size: 1.5rem;
      margin-top: 60px;
      margin-bottom: 24px;
    }
    & > .text-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > span {
        font-size: 0.875rem;
        text-align: center;
        word-break: keep-all;
      }
      margin-bottom: 40px;
    }
    & > .review_list {
      & > .review_card {
        /* White */

        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        min-height: 147px;
        margin-bottom: 24px;
        & > div {
          &:first-child {
            display: flex;
            flex-direction: column;

            padding: 16px 12px;
            box-sizing: border-box;
            & > div {
              &:first-child {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgba(0, 0, 0, 0.4);
                padding-bottom: 8px;
                margin-bottom: 16px;
                & > div {
                  & > span {
                    &:first-child {
                      font-size: 1rem;
                    }
                  }
                  &:last-child {
                    & > span {
                      font-size: 0.75rem;
                    }
                  }
                }
              }
              &:last-child {
                display: -webkit-box;
                display: -ms-flexbox;
                display: box;
                margin-top: 1px;
                max-height: 80px;
                overflow: hidden;
                vertical-align: top;
                text-overflow: ellipsis;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
            }
          }
          &:last-child {
            /* Light Red */
            min-height: 34px;
            background: #ff7575;
            border-radius: 0px 0px 8px 8px;
            display: flex;
            justify-content: space-between;
            padding: 0 16px;
            align-items: center;
            &.active {
              background: #f0eff4;
              & > span {
                color: #000;
              }
              & > svg {
                & > path {
                  fill: #000;
                }
              }
            }
            & > span {
              font-size: 0.875rem;
              color: #ffffff;
            }
            & > svg {
              & > path {
                fill: #ffffff;
              }
            }
          }
        }
      }
    }
  }
`;

export const RePlayContainerWrap = styled.div`
  background: #fff;
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    & > h1 {
      margin-top: 60px;
      text-align: center;
      font-family: Spoqa Han Sans Neo;

      font-weight: 700;
      font-size: 1.5rem;
      line-height: 30px;
      /* identical to box height */

      /* Black */

      color: #000000;
    }
    & > .star_wrap {
      margin-bottom: 24px;
    }
    & > .customer_review {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      & > span {
        margin-bottom: 1rem;
      }
      & > div {
        width: 100%;
        min-height: 240px;
        box-sizing: border-box;
        padding: 16px;
        /* Background */

        background: #f0eff4;
        /* Gray 40% */

        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        border-radius: 8px;
        & > span {
          /* Mobile_Body3 */

          font-family: Spoqa Han Sans Neo;
          font-style: normal;
          font-weight: normal;
          font-size: 0.875rem;
          line-height: 18px;

          /* Black */

          color: #000000;
        }
      }
    }
    & > .teacher_review {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      & > span {
        margin-bottom: 1rem;
      }
      & > textarea {
        width: 100%;
        resize: none;
        min-height: 240px;
        box-sizing: border-box;
        padding: 16px;
        /* Background */

        background: #f0eff4;
        /* Gray 40% */

        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        border-radius: 8px;
        font-family: Spoqa Han Sans Neo;
        font-style: normal;
        font-weight: normal;
        font-size: 0.875rem;
        line-height: 18px;

        /* Gray 40% */
        color: #000;
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
`;

export const CounSelorStudyCheckWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding: 0 20px;
    & > .time_list {
      margin-top: 58px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div {
        & > button {
          width: 12px;
          background: none;
          border: 0;
        }
      }
      & > h2 {
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
    & > .study_no-list {
      margin-top: 40px;
      & > span {
        font-size: 1rem;
        font-weight: 700;
      }
      & > div {
        margin-top: 16px;
        & > .card {
          /* White */
          min-height: 104px;
          background: #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          margin-bottom: 24px;
          /* display: flex; */
          /* height: 100%; */
          & > div {
            &:first-child {
              display: flex;
              /* Light Red */
              &.expected {
                background: rgba(0, 0, 0, 0.2);
              }
              &.complete {
                background: #f0eff4;
                & > span {
                  color: #000;
                }
                & > svg {
                  & > path {
                    fill: #000;
                  }
                }
              }
              background: #ff7575;
              border-radius: 8px 8px 0px 0px;
              min-height: 34px;
              justify-content: space-between;
              align-items: center;
              padding: 0 16px;
              & > span {
                font-size: 0.875rem;
                color: #ffffff;
              }
            }
            &:last-child {
              display: flex;
              flex-direction: column;
              /* align-items: center; */

              /* min-height: 100%; */
              /* justify-content: center; */
              padding: 12px 16px;
              box-sizing: border-box;

              & > span {
                &:first-child {
                  margin-bottom: 8px;
                  font-size: 1rem;
                  font-weight: 700;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ClassDetailContainerWrap = styled.div`
  max-width: 450px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
  overflow: hidden;
  & > .container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 100%;
    padding: 0 20px;
    padding-bottom: 116px;
    box-sizing: border-box;
    & > .grid1 {
      grid-column: 1/8;
      grid-column: 1/8;
      margin-top: 18px;
      & > h1 {
        text-align: center;
        color: rgba(255, 154, 40, 1);
      }
    }
    & > .grid2 {
      grid-column: 1/8;
      grid-row: 2/3;
      margin-top: 60px;
      & > h2 {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
    & > .grid3 {
      grid-column: 1/8;
      grid-row: 3/4;
      margin-top: 12px;
      text-align: center;
      & > span {
        font-size: 0.875rem;
        font-weight: 700;
      }
      & > div {
        margin-top: 16px;
        display: flex;
        justify-content: center;
        & > div {
          width: 100%;
          border: 1px solid #000;
          margin-right: 9px;
          min-height: 40px;
          background: #ffffff;
          /* Black */

          border: 1px solid #000000;
          box-sizing: border-box;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          & > span {
            font-size: 1rem;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    & > .grid4 {
      grid-column: 1/8;
      grid-row: 4/5;
      margin-top: 24px;
      text-align: center;
      & > span {
        font-size: 0.875rem;
        font-weight: 700;
      }
      & > div {
        display: flex;
        min-height: 40px;
        background: #fff;
        /* White */

        background: #ffffff;
        /* Black */

        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 4px;
        justify-content: center;
        align-items: center;
        margin-top: 8px;
        & > span {
          font-size: 1rem;
        }
      }
    }
    & > .grid5 {
      grid-column: 1/8;
      grid-row: 5/6;
      margin-top: 24px;
      text-align: center;
      & > span {
        font-size: 0.875rem;
        font-weight: 700;
      }
      & > div {
        display: flex;
        flex-direction: column;
        margin-top: 8px;
        & > div {
          margin-bottom: 8px;
          min-height: 40px;
          background: #ffffff;
          /* Black */

          border: 1px solid #000000;
          box-sizing: border-box;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          & > span {
            font-size: 1rem;
          }
        }
      }
    }
    & > .grid6 {
      grid-column: 1/8;
      grid-row: 6/7;
      margin-top: 60px;
      text-align: center;
      & > span {
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
    & > .grid7 {
      grid-column: 1/8;
      grid-row: 7/8;
      margin-top: 12px;
      text-align: center;
      & > span {
        font-size: 0.875rem;
        font-weight: 700;
      }
      & > div {
        display: flex;
        justify-content: center;
        & > div {
          width: 100%;

          margin-right: 8px;
          min-height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;

          /* White */

          background: #ffffff;
          /* Black */

          border: 1px solid #000000;
          box-sizing: border-box;
          border-radius: 4px;
          margin-top: 16px;
          & > span {
            font-size: 1rem;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    & > .grid8 {
      grid-column: 1/8;
      grid-row: 8/9;
      margin-top: 40px;
      text-align: center;
      & > span {
        font-size: 0.875rem;
        font-weight: 700;
      }
      & > div {
        display: flex;
        justify-content: center;
        & > div {
          width: 100%;

          margin-right: 8px;
          min-height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;

          margin-top: 16px;

          /* White */

          background: #ffffff;
          /* Black */

          border: 1px solid #000000;
          box-sizing: border-box;
          border-radius: 4px;
          & > span {
            font-size: 1rem;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    & > .grid9 {
      grid-column: 1/8;
      grid-row: 9/10;
      margin-top: 24px;
      text-align: center;
      & > span {
        font-size: 0.875rem;
        font-weight: 700;
      }
      & > div {
        margin-top: 16px;
        border: 1px solid #000;
        min-height: 106px;
        padding: 8px;
        box-sizing: border-box;
        background: #ffffff;
        /* Black */

        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 4px;

        font-size: 1rem;
        word-break: keep-all;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    & > .grid10 {
      grid-column: 1/8;
      grid-row: 10/11;
      margin-top: 24px;
      text-align: center;
      & > span {
        font-size: 0.875rem;
        font-weight: 700;
      }
      & > div {
        margin-top: 16px;

        min-height: 106px;
        padding: 8px;
        box-sizing: border-box;
        background: #ffffff;
        /* Black */

        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 4px;
        font-size: 1rem;
        word-break: keep-all;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    & > .grid11 {
      grid-column: 1/8;
      grid-row: 11/12;
      margin-top: 40px;
      text-align: center;
      & > span {
        font-size: 0.875rem;
        font-weight: 700;
      }
      & > div {
        margin-top: 8px;
        & > div {
          display: flex;
          justify-content: center;

          align-items: center;
          margin-bottom: 8px;

          min-height: 40px;
          background: #ffffff;
          /* Black */

          border: 1px solid #000000;
          box-sizing: border-box;
          border-radius: 4px;
          & > span {
            font-size: 1rem;
          }
        }
      }
    }
    & > .btn-group {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 450px;
      box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.25);
      & > button {
        width: 100%;
        height: 56px;
        &.active {
          background: rgba(0, 0, 0, 0.7);
        }
        box-sizing: border-box;
        /* Purple */

        background: #6100ff;
        /* Purple */

        border: 1px solid #6100ff;
        box-sizing: border-box;
        box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.25);
        border: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: #fff;
      }
    }
  }
`;

export const CounselorContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
`;
