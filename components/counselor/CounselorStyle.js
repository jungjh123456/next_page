import styled from "styled-components";

export const CounSelorLocationWrap = styled.div`
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
    & > .location_list {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      & > span {
        font-size: 1rem;
      }
      & > .location_card {
        background: #ffffff;
        margin-top: 8px;
        /* Gray 40% */
        min-height: 48px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        & > div {
          & > span {
            font-size: 1rem;
          }
        }
        & > svg {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    & > .add_list {
      & > span {
        display: block;
        margin-bottom: 8px;
      }
      & > .add_btn {
        text-align: center;
        margin-top: 24px;
        & > button {
          min-width: 152px;
          /* Background */
          min-height: 48px;
          background: #f0eff4;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
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
