import styled from "styled-components";

export const HomeGoSection2Wrap = styled.div`
  & > .container {
    margin-top: 80px;
    padding: 0 20px;
    padding-bottom: 80px;
    & > h2 {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;
      & > span {
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .card_wrap {
      & > .card {
        &:nth-child(2) {
          background: #ffbba6;
        }
        &:nth-child(3) {
          background: #bfd9ff;
          margin-bottom: 0;
        }
        margin-bottom: 16px;
        position: relative;
        display: flex;
        justify-content: space-between;
        min-height: 200px;
        background: #ffdc88;
        border-radius: 8px;
        padding: 14px 16px;
        box-sizing: border-box;
        & > div {
          &:first-child {
            & > span {
              &:first-child {
                font-size: 1.25rem;
                font-weight: 700;
              }
            }
            & > div {
              margin-top: 8px;
              & > span {
                font-size: 0.85rem;
              }
            }
          }
        }
        & > .img-card {
          display: flex;
          /* justify-content: flex-end; */
          align-items: flex-end;
          & > .img-wrap {
            min-width: 82px;
            max-width: 82px;
            /* height: 117px; */
            max-height: 117px;
            min-height: 117px;
            /* position: absolute; */

            display: flex;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
`;
export const HomeGoSection3Wrap = styled.div`
  background: #f0eff4;

  padding-top: 80px;
  & > .container {
    padding: 0 20px;
    & > span {
      font-size: 0.75rem;
    }
    & > h2 {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      margin-top: 16px;
      margin-bottom: 44px;
      & > span {
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .renge {
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
      & > div {
        /* border-right: 2px solid #c4c4c4; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & > span {
          &:first-child {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 16px;
          }
          &:last-child {
            font-size: 0.75rem;
          }
        }
        &:last-child {
          border-right: 0;
        }
      }
      & > .line {
        display: block;
        /* height: 100%; */
        width: 2px;
        background: #c4c4c4;
      }
    }
    & > .img-wrap {
      min-width: 360px;
      min-height: 386px;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
