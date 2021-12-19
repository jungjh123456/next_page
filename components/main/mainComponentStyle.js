import styled, { keyframes } from "styled-components";

export const Mainsection1Wrap = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f0eff4;

  box-sizing: border-box;

  position: relative;
  & > .container {
    margin-top: 116px;
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    & > div {
      text-align: center;
      & > h1 {
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
      }
      & > span {
        font-size: 1rem;
      }
    }

    & > .img-wrap {
      /* width: 100%;
    padding-bottom: 50%; */
      /* border: 1px solid red; */
      & > img {
        max-width: 360px;
      }
      & > span {
      }
    }

    & > .btn-group {
      /* padding: 0 20px; */
      /* box-sizing: border-box; */
      /* position: absolute; */
      width: 100%;
      /* max-width: 360px; */
      /* bottom: 20px; */
      position: relative;

      & > div {
        position: absolute;
        left: 20px;
        right: 20px;
        bottom: -30px;
        & > button {
          display: block;
          background: #6100ff;
          width: 100%;
          box-sizing: border-box;
          /* max-width: 650px; */
          min-height: 48px;
          border-radius: 8px;
          color: #fff;
          font-size: 1rem;
          padding: 14px 16px;
        }
      }
    }
  }
`;

export const Mainsection2Wrap = styled.section`
  /* @media only screen and (max-width: 768px) { */
  /* border: 1px solid red; */
  /* min-height: 1081px; */
  /* max-height: 1081px; */
  background: #fff;
  & > .container {
    display: flex;
    width: 100%;

    padding-bottom: 80px;
    /* box-sizing: border-box; */
    align-items: center;
    height: 100%;
    flex-direction: column;
    /* justify-content: space-around; */
    & > .heading-text {
      margin-top: 80px;
      margin-bottom: 60px;
      & > h2 {
        text-align: center;
        font-size: 0.875rem;
        color: rgba(0, 0, 0, 0.4);
      }
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 24px;
        box-sizing: border-box;
        & > span {
          font-size: 1.5rem;
          font-weight: 700;
          & > span {
            color: #6100ff;
          }
        }
      }
    }

    & > .tab-menu {
      display: flex;
      width: 100%;
      justify-content: space-around;
      box-sizing: border-box;
      margin-top: 24px;
      margin-bottom: 24px;
      & > input {
        display: none;
        &:checked + label {
          border-bottom: 2px solid #6100ff;
          & > span {
            color: #000;
          }
        }
      }
      & > label {
        display: flex;

        flex-direction: column;
        box-sizing: border-box;
        & > span {
          margin-top: 8px;
          margin-bottom: 8px;
          font-size: 1rem;
        }
      }
    }
    & > .teach-info {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      /* margin-top: -50px; */
      & > .info_text {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        min-width: 320px;
        margin-bottom: 40px;
        padding: 0 20px;
        box-sizing: border-box;
        & > div {
          width: 100%;
          background: #f0eff4;
          min-height: 48px;
          border: 1px solid rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
          padding: 14px 16px;
          box-sizing: border-box;
          border-radius: 8px;
          & > span {
            font-size: 1rem;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      & > .plus-btn {
        & > a {
          display: flex;
          align-items: center;
          text-decoration: none;
          & > span {
            margin-right: 16px;
          }
        }
      }
    }
  }
  /* } */
`;
export const MainSection3Wrap = styled.section``;
export const MainSection4Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */

  background: #f0eff4;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h1 {
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
      }
      margin-top: 24px;
      margin-bottom: 60px;
    }
    & > .img-wrap {
      /* height: 500px; */
      /* display: flex; */
      flex-wrap: wrap;
      /* width: 100%; */
      /* justify-content: center;
      align-items: center; */
      /* gap: 14px; */
      & > a {
        display: block;
        margin-bottom: 14px;
        /* width: 320px; */
      }
    }
  }
`;

export const MainSection5Wrap = styled.section`
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
    padding-bottom: 15%;
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

          & > img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;
const animate = keyframes`
  100% {
     transform: translateY(-350%);
  }

  80% {
     transform: translateY(-250%);
  }

  60% {
     transform: translateY(-150%);
  }
 
  40% {
     transform: translateY(-50%);
  }

  20% {
    opacity: 1;
     transform: translateY(100%);
  }
 
  0% {
    opacity: 0;
     transform: translateY(250%);
  }
`;
export const MainSection6Wrap = styled.section`
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
      margin-bottom: 40px;
    }
    overflow: hidden;
    & > .card {
      width: 100%;

      height: 543px;
      overflow: hidden;

      & > .card1 {
        animation-iteration-count: infinite;
        animation-duration: 5s;
        animation-name: ${animate};
        animation-timing-function: 1s;
        /* animation-direction: alternate; */
        width: 100%;
        height: 165px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        padding: 24px 12px;
        box-sizing: border-box;
        margin-bottom: 24px;
        & > div {
          &:first-child {
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.4);
            padding-bottom: 8px;
            margin-bottom: 8px;
            & > span {
              font-size: 1rem;
            }
            & > div {
              /* padding: 3px 8px; */
              height: 20px;
              box-sizing: border-box;
              background: #6100ff;
              color: #fff;
              border-radius: 6px;
              margin-left: 8px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0 8px;
              & > span {
                font-size: 0.75rem;
              }
            }
          }
          &:last-child {
            font-size: 0.875rem;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
    & > .plus-btn {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      & > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        & > span {
          margin-right: 16px;
        }
      }
    }
  }
`;

export const MainSection7wrap = styled.section`
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
      margin-bottom: 40px;
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
