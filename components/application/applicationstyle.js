import styled from "styled-components";

export const BabyInfoWrap = styled.div`
  background: #fff;
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    & > .progress {
      margin-top: 24px;
      margin-bottom: 40px;
    }
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }
    & > .input-wrap {
      margin-bottom: 16px;
    }
    & > .radio-check {
      margin-bottom: 40px;
      & > span {
        font-size: 1rem;
      }
      & > .radio_group {
        margin-top: 16px;
        display: flex;
        justify-content: space-around;
      }
    }
  }
`;

export const ProgramCheckPageWrap = styled.div`
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    & > .progress {
      margin-top: 24px;
      margin-bottom: 40px;
    }
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }
    & > .progrem_check-wrap {
      & > input {
        display: none;
        &:checked + label {
          background: #6100ff;
          & > div {
            color: #fff;
            & > svg {
              & > path {
                fill: #fff;
              }
            }
          }
        }
      }
      & > label {
        display: flex;
        flex-direction: column;
        min-height: 205px;
        background: #f0eff4;
        margin-bottom: 16px;
        padding: 24px 16px 12px 16px;
        box-sizing: border-box;
        border-radius: 8px;
        justify-content: space-between;
        & > div {
          &:first-child {
            & > h2 {
              font-size: 1.25rem;
              margin-bottom: 19px;
            }
            & > span {
              display: flex;
              font-size: 1rem;
              &:nth-child(2) {
                word-break: keep-all;
              }
              &:nth-child(3) {
                word-break: keep-all;
                color: #6100ff;
              }
            }
          }
          &:last-child {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            & > span {
              margin-right: 8px;
              font-size: 0.875rem;
            }
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    & > .btn-group {
      margin-top: 40px;
    }
  }
`;
