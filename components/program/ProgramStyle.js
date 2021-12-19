import styled from "styled-components";

export const Program1Wrap = styled.section`
  /* height: 100vh; */
  /* height: 100%; */
  /* max-width: 360px;
  max-width: 360px; */

  width: 100%;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  background: #fff;
  /* background: #f0eff4 url("/imgs/sectionBgs.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center 90%; */
  position: relative;
  & > .container {
    margin-top: 116px;
    display: flex;
    flex-direction: column;
    /* padding-bottom: 60px; */
    align-items: center;
    justify-content: space-between;
    height: 100%;

    & > .piting {
      text-align: center;
      padding: 0 20px;
      box-sizing: border-box;
      & > h1 {
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
      }
      & > span {
        font-size: 1rem;
        word-break: keep-all;
        text-align: center;
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
      margin-top: 41px;
      & > div {
        position: absolute;
        left: 20px;
        right: 20px;
        bottom: 25px;
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
export const Program2Wrap = styled.section`
  /* height: 100vh; */
  /* height: 100%; */
  /* max-width: 360px;
  max-width: 360px; */
  /* min-height: 1374px; */
  width: 100%;
  /* margin: 0 auto; */
  background: #f0eff4;

  position: relative;
  padding-bottom: 80px;
  & > .container {
    margin-top: 80px;
    /* display: flex; */
    /* flex-direction: column; */
    /* padding-bottom: 60px; */

    height: 100%;
    padding: 0 20px;

    box-sizing: border-box;
    & > h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    & > .home_piting-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 24px;
      margin-bottom: 60px;
    }
    & > .home-card {
      display: flex;

      width: 100%;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 24px;
      & > .card1 {
        background: #fff;
        width: 100%;
        max-width: 320px;
        /* min-width: 320px; */
        min-height: 320px;
        padding: 24px 20px;
        box-sizing: border-box;
        text-align: center;
        border-radius: 8px;
        & > h3 {
          font-size: 1.25rem;
        }
      }
    }
  }
`;
export const Program3Wrap = styled.section`
  /* height: 100vh; */
  /* height: 100%; */
  /* max-width: 360px;
  max-width: 360px; */
  /* min-height: 1374px; */
  width: 100%;
  /* margin: 0 auto; */
  background: #fff;

  position: relative;
  padding-top: 80px;
  padding-bottom: 60px;
  & > .container {
    /* margin-top: 80px; */
    /* display: flex; */
    /* flex-direction: column; */
    /* padding-bottom: 60px; */

    height: 100%;
    padding: 0 20px;

    /* padding-bottom: 80px; */
    box-sizing: border-box;
    & > h2 {
      /* margin-top: 80px; */
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;
      & > span {
        font-size: 1.5rem;
        & > span {
          color: #6100ff;
        }
      }
    }
    & > .text_gae {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > span {
        font-size: 0.75rem;
        &:last-child {
          margin-top: 12px;
        }
      }
    }
    & > .imgwrap {
      margin-top: 60px;
    }
  }
`;
export const Program4Wrap = styled.section`
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
      /* margin-top: 80px; */
    }
    & > .reason-text {
      display: flex;
      margin-top: 80px;
      flex-direction: column;
      align-items: center;
      & > span {
        font-weight: 700;
        font-size: 1.5rem;
      }
      /* margin-top: 24px; */
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
export const Program5Wrap = styled.section`
  width: 100%;

  /* min-height: 520px; */
  /* padding-bottom: 40%; */
  /* background-size: cover; */
  /* max-width: 768px; */
  /* padding-bottom: 50px; */

  background: #fff;
  padding-top: 80px;
  & > .container {
    padding: 0 20px;
    padding-bottom: 80px;
    box-sizing: border-box;
    & > h2 {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* margin-top: 80px; */
    }
    & > .emoticon {
      display: flex;
      margin-top: 40px;
      margin-bottom: 24px;
      justify-content: center;
      align-items: center;
    }
    & > .teacher_text {
      text-align: center;
      display: flex;
      flex-direction: column;
      & > span {
        font-size: 1rem;
        word-break: keep-all;
        &:last-child {
          font-size: 0.75rem;
          margin-top: 16px;
        }
      }
    }
    & > .btn-group {
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
`;
