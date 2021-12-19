import styled from "styled-components";

export const BrainDevelopSection1Wrap = styled.section`
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
  background: #f0eff4;
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
    padding-bottom: 24px;
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
      border: 1px solid red;
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
      padding: 0 17px;
      box-sizing: border-box;
      width: 100%;
      /* max-width: 360px; */
      /* bottom: 20px; */
      position: relative;
      margin-top: 41px;

      & > div {
        padding: 0 20px;
        /* position: absolute; */
        /* left: 20px; */
        /* right: 20px; */
        /* bottom: 50px; */
        & > button {
          display: block;
          background: #6100ff;
          margin-top: -8%;
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
export const BrainDevelopSection2Wrap = styled.section`
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
    }
    & > .imgwrap {
      margin-top: 60px;
    }
  }
`;

export const BrainDevelopSection3wrap = styled.section`
  position: relative;
  padding-top: 80px;
  padding-bottom: 60px;
  background: #f0eff4;
  & > .container {
    padding: 0 20px;
    & > h2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > span {
        font-size: 1.5rem;
        font-weight: 700;
        &:first-child {
          color: #6100ff;
        }
      }
      margin-bottom: 60px;
    }
    & > ul {
      & > li {
        margin-bottom: 8px;
      }
    }
  }
`;

export const BrainDevelopSection4wrap = styled.section`
  background: #fff;

  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;

  & > .container {
    padding: 0 20px;
    & > h2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;
    }
    & > .tab-wrap {
      margin-bottom: 24px;
      & > input {
        display: none;
        &:checked + label {
          color: #6100ff;
          border-bottom: 2px solid #6100ff;
        }
      }
      display: flex;
      justify-content: space-between;
      & > label {
        /* margin-right: 16px; */

        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-bottom: 8px;
        font-size: 1rem;
        font-weight: 700;
      }
    }
    & > .contents-wrap {
      & > ul {
        margin-top: 24px;
      }
    }
  }
`;
export const BrainDevelopSection6wrap = styled.section`
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
export const BrainDevelopSection7wrap = styled.section`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  background: #f0eff4;
  & > .container {
    padding: 0 20px;
    & > .btn-group {
      margin-top: 40px;
    }
  }
`;
export const BrainDevelopSection8wrap = styled.section`
  position: relative;
  /* padding-top: 80px; */
  /* min-height: 291p1x; */
  /* padding-bottom: 80.83%; */

  background: #f0eff4;
  background: url("./imgs/backgroundimg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 291px;

  /* height: 191px; */
  & > .container {
    padding: 0 20px;

    height: 100%;
    padding-top: 80px;
    /* padding-bottom: -80px; */
    /* margin-top: 80px; */
    /* box-sizing: border-box; */
    & > h2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.5rem;
      margin-bottom: 40px;
      word-break: keep-all;
      & > span {
        display: block;
        text-align: center;
        &:last-child {
          color: #6100ff;
        }
      }
    }
    & > .linked-wrap {
      display: flex;
      & > a {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #000;
        & > span {
          margin-right: 8px;
        }
      }
    }
    & > .btn-group {
      margin-top: 40px;
    }
  }
`;
