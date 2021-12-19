import styled from "styled-components";

export const ProfileContainerWrap = styled.div`
  /* border: 1px solid red; */
  background: #fff;
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    display: flex;
    flex-direction: column;
    height: 100vh;

    align-items: center;
    padding: 0 20px;
    background-color: #fff;
    overflow: auto;
    padding-bottom: 43px;
    & > .modal {
      /* border: 1px solid red; */
      /* display: none; */
      &.active {
        position: fixed;
      }

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 450px;
      margin: 0 auto;

      box-sizing: border-box;

      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
      background: rgba(0, 0, 0, 0.4);
      & > .address-wrap {
        position: absolute;
        bottom: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
      & > .daum_popup {
        border: 1px solid red !important;
        & > .popup_post_type2 {
        }
      }
    }
    & > .img-wrap {
      width: 96px;
      height: 96px;
      margin-top: 60px;
      text-align: center;
      border-radius: 50%;
      border: 1px solid #f0eff4;
      background: #f0eff4;
      margin-bottom: 40px;
      /* border: 1px solid red; */
      position: relative;
      & > input {
        display: none;
      }
      & > label {
        & > img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      & > svg {
        position: absolute;
        bottom: 5%;
        right: -3%;
      }
    }
    & > .user_name-wrap {
      /* margin-top: 40px; */
      width: 100%;
      display: flex;
      flex-direction: column;
      /* align-items: center; */

      box-sizing: border-box;
      margin-bottom: 25px;
      &:last-child {
        margin-bottom: 0;
      }
      & > span {
        font-size: 1rem;
      }
      & > input {
        display: flex;
        margin-top: 8px;
        width: 100%;
        height: 48px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        /* justify-content: center; */
        /* align-items: center; */
        text-align: center;
        box-sizing: border-box;
        color: #000;
        font-size: 1rem;
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
      & > button {
        display: flex;
        margin-top: 8px;
        width: 100%;
        height: 48px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        justify-content: center;
        align-items: center;
        text-align: center;
        box-sizing: border-box;
        color: rgba(0, 0, 0, 0.4);
        font-size: 1rem;
        position: relative;
        word-break: keep-all;
        & > svg {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`;

export const AppliedContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    box-sizing: border-box;
    margin-top: 116px;
    & > h2 {
      margin-bottom: 40px;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
    }
    & > .applied_wrap {
      & > .card1 {
        width: 100%;
        min-height: 104px;
        background: #f0eff4;
        padding: 0px 20px;
        box-sizing: border-box;
        margin-bottom: 16px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > div {
          display: flex;
          flex-direction: column;
          & > span {
            margin-bottom: 8px;
            font-size: 0.875rem;
            &:first-child {
              font-size: 1rem;
              font-weight: 700;
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
        & > svg {
          transform: rotate(270deg);
          position: relative;
          z-index: 0;
        }
      }
    }
  }
`;

export const PaymentInfocontainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    box-sizing: border-box;
    padding-bottom: 91px;
    & > h2 {
      text-align: center;
      box-sizing: border-box;
      font-size: 1.5rem;
      margin-top: 60px;
      margin-bottom: 24px;
    }
    & > span {
      display: block;
      text-align: center;
      margin-bottom: 40px;
    }
    & > div {
      & > h2 {
        font-size: 1.25rem;
        padding: 0 20px;
        margin-bottom: 24px;
      }
      & > h3 {
        font-size: 1.25rem;
        padding: 0 20px;
        margin-bottom: 24px;
        margin-top: 40px;
      }
      & > .program_wrap {
        padding-bottom: 40px;
        border-bottom: 1px solid #f0eff4;

        & > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          padding: 0 20px;
          &:last-child {
            margin-bottom: 0;
          }
          & > span {
            &:first-child {
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }
      }
      & > .cost_wrap {
        padding-bottom: 40px;

        & > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          padding: 0 20px;
          &:last-child {
            margin-bottom: 0;
          }
          & > span {
            &:first-child {
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.4);
            }
          }
        }
      }
      & > div {
        /* border: 1px solid red; */
        & > h2 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 24px;
        }

        &:first-child {
          display: flex;
          border: 1px solid red;
          justify-content: space-between;
          border: 1px solid red;
        }

        /* flex-direction: column; */
      }
    }
  }
`;

export const StudyManageMentContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding: 0 20px;
    padding-bottom: 45px;
    margin-top: 116px;
    & > h2 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }
    & > .study_wrap {
      & > .card {
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
        display: flex;
        flex-direction: column;
        & > div {
          &:first-child {
            padding: 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > div {
              display: flex;
              flex-direction: column;
              &:first-child {
                & > span {
                  margin-bottom: 8px;
                  &:last-child {
                    margin-bottom: 0;
                  }
                }
              }
              &:last-child {
                border: 1px solid #6100ff;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                & > div {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
              }
            }
          }
          &:last-child {
            background: #f0eff4;
            min-height: 34px;
            padding: 0 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
  }
`;

export const StudyManageMentinfoContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding-bottom: 24px;
    & > h2 {
      text-align: center;
      margin-bottom: 24px;
      margin-top: 116px;
    }
    & > .teacher_info {
      padding: 0 20px;
      margin-bottom: 24px;
      & > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        &:last-child {
          margin-bottom: 0;
        }
        & > span {
          &:first-child {
            font-size: 1rem;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.4);
          }
          &:last-child {
            font-size: 1rem;
          }
        }
      }
    }
    & > .study_log {
      & > .card {
        border-top: 1px solid #f0eff4;
        padding: 16px 20px;
        & > div {
          display: flex;
          justify-content: space-between;
          &:first-child {
            margin-bottom: 8px;
            & > span {
              &:first-child {
                font-size: 1rem;
                font-weight: 700;
              }
              &:last-child {
                font-size: 1rem;
                font-weight: 700;
                color: #6100ff;
              }
            }
          }
          &:last-child {
            & > span {
              color: #000;
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }
`;

export const ReviewContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding: 0 20px;
    padding-bottom: 45px;
    margin-top: 116px;
    & > h2 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }
    & > .study_wrap {
      & > .card {
        background: #ffffff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
        display: flex;
        flex-direction: column;
        & > div {
          &:first-child {
            padding: 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > div {
              display: flex;
              flex-direction: column;
              &:first-child {
                & > span {
                  margin-bottom: 8px;
                  font-size: 1rem;
                  &:first-child {
                    font-weight: 700;
                  }
                  &:nth-child(2) {
                    font-size: 0.875rem;
                  }
                  &:last-child {
                    margin-bottom: 0;
                    font-size: 0.875rem;
                    color: #6100ff;
                  }
                }
              }
            }
          }
          &:last-child {
            background: #f0eff4;
            min-height: 34px;
            padding: 0 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
  }
`;

export const ReviewInfoContainerWrap = styled.div`
  max-width: 450px;

  margin: 0 auto;
  & > .container {
    padding-bottom: 24px;
    margin-top: 116px;
    & > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 40px;
    }
    & > .img-wrap {
      text-align: center;
      margin-bottom: 40px;
    }
    & > .teacher-info {
      padding: 0 20px;
      padding-bottom: 40px;
      box-sizing: border-box;
      border-bottom: 2px solid #f0eff4;
      & > div {
        display: flex;
        justify-content: space-between;
      }
    }
    & > .star_wrap {
      margin-bottom: 24px;
    }
    & > .review_text {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
      & > span {
        font-size: 1rem;
        margin-bottom: 16px;
      }
      & > textarea {
        resize: none;
        border: 1px solid #6100ff;
        background: #f0eff4;
        border-radius: 8px;
        font-size: 0.875rem;
        color: #000;
        padding: 16px;
        box-sizing: border-box;
        font-family: "Spoqa Han Sans Neo", sans-serif;
        &::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
    & > .btn-group {
      padding: 0 20px;
      box-sizing: border-box;
      margin-top: 40px;
      & > button {
        width: 100%;
        min-height: 48px;
        background: #6100ff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        font-size: 1rem;
        color: #fff;
        border-radius: 8px;
        &:disabled {
          width: 100%;
          min-height: 48px;
          background: #c9c9c9;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

          font-size: 1rem;
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
`;
