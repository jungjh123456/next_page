import styled from "styled-components";

export const DockTeacherSection1wrap = styled.section`
  width: 100%;
  /* margin: 0 auto; */
  /* display: flex; */
  /* flex-direction: column; */

  background: #f0eff4;

  /* height: 100vh; */
  /* max-height: 640px; */

  width: 100%;

  display: flex;
  flex-direction: column;

  background: #f0eff4;

  & > .container {
    margin-top: 116px;
    /* display: flex; */
    flex-direction: column;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: center;

    height: 100%;
    & > h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.5rem;
      & > span {
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .teacher_text {
      margin-top: 16px;
      text-align: center;
      word-break: keep-all;
      & > span {
        font-size: 1rem;
      }
    }
    & > .img-wrap {
      /* width: 100%;
    padding-bottom: 50%; */
      /* border: 1px solid red; */
      /* border: 1px solid red; */
      margin-top: 40px;
      & > img {
        /* max-width: 360px; */
      }
      & > span {
      }
    }
  }
`;

export const DockTeacherSection2wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  overflow: hidden;
  background: #fff;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h2 {
      font-size: 0.875rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.4);
      text-align: center;
      margin-top: 80px;
    }
    & > .reason-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > span {
        font-weight: 700;
        font-size: 1.5rem;
        & > span {
          color: #6100ff;
        }
      }
      margin-top: 24px;
      margin-bottom: 60px;
    }
    position: relative;
    overflow: hidden;
    min-height: 704px;
    & > .slider {
      width: 100%;
      min-height: 360px;
      position: absolute;
      padding-right: 20px;
      box-sizing: border-box;
      & > div {
        /* padding-bottom: 40%; */
        display: inline-flex;
        /* flex-wrap: wrap; */
        /* justify-content: center; */
        /* align-items: center; */
        overflow-x: scroll;
        width: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;
        &::-webkit-scrollbar {
          /* width: 1.2px !important; */
        }
        &::-webkit-scrollbar-thumb {
          background-color: #2f3542;
        }
        &::-webkit-scrollbar-track {
          background-color: grey;
        }
        & > div {
          width: 100%;
          min-width: 264px;
          margin-right: 16px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          & > div {
            border-bottom: 2px solid #6100ff;
            height: calc(360px - 254px);
            & > div {
              display: flex;
              flex-direction: column;
              padding: 8px 16px;
              & > span {
                font-size: 0.875rem;
                margin-bottom: 8px;
                &:first-child {
                  font-size: 1rem;
                  font-weight: 700;
                }
                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }
          & > img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;
export const DockTeacherSection4wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  overflow: hidden;
  background: #fff;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h2 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    & > .teacher_text {
      margin-top: 24px;
      margin-bottom: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > span {
        font-size: 1rem;
      }
    }
    & > .check_box {
      margin-bottom: 40px;
      & > h3 {
        font-size: 1.25rem;
        text-align: center;
        margin-bottom: 16px;
      }
      &:last-child {
        margin-bottom: 0;
      }
      & > div {
        min-height: 52px;
        background: #f0eff4;
        display: flex;
        flex-direction: column;
        padding: 14px 12px;
        box-sizing: border-box;
        border-radius: 8px;
        & > div {
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;
export const DockTeacherSection5wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  overflow: hidden;
  background: #f0eff4;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h2 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 60px;
    }
    & > .study_way {
      text-align: center;
      margin-bottom: 60px;
      &:last-child {
        margin-bottom: 0;
      }
      & > h3 {
        font-size: 1.25rem;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        & > span {
          &:first-child {
            margin-bottom: 16px;
          }
        }
      }
      & > div {
        margin-top: 16px;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export const DockTeacher6Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */
  overflow: hidden;
  background: #fff;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;

    & > .reason-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > span {
        font-weight: 700;
        font-size: 1.5rem;
        & > span {
          color: #6100ff;
        }
      }
      margin-top: 80px;
      margin-bottom: 60px;
    }
    & > .img-wrap {
      padding: 0 76px;
      box-sizing: border-box;
    }
    & > .btn-group {
      margin-top: 60px;
      & > button {
        min-height: 48px;
        background: #6100ff;
        width: 100%;
        border-radius: 8px;
        color: #fff;
        font-size: 1rem;
      }
    }
  }
`;
