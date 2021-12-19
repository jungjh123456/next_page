import styled from "styled-components";

export const MainWrap = styled.div`
  width: 100%;
  overflow: hidden;

  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;

    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ProgramWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  /* max-width: 360px; */
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DockTeacherWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  /* max-width: 360px; */
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const SupportrWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  /* max-width: 360px; */
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const TeacherAppliWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  /* max-width: 360px; */
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const BrainDevelopWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  /* max-width: 360px; */
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const QuestionWrap = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  /* max-width: 360px; */
  max-width: 450px;

  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const LocationWrap = styled.div`
  width: 100%;
  /* overflow: hidden; */
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const MyPageWrap = styled.div`
  width: 100%;
  /* overflow: hidden; */
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ComunityContainerWrap = styled.div`
  width: 100%;
  /* overflow: hidden; */
  box-sizing: border-box;
  max-width: 450px;

  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MyPageMenuWrap = styled.section`
  /* min-height: 100vh; */
  padding-bottom: 24px;
  background: #fff;
  & > .container {
    padding: 0 20px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 100%;
    box-sizing: border-box;
    margin-top: 116px;
    & > h1 {
      text-align: center;
    }
    & > .setting-list {
      width: 100%;
      margin-top: 40px;
      & > .list-click {
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
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
      margin-top: 110px;
      & > button {
        cursor: pointer;
        & > svg {
          margin-right: 8px;
        }
      }
    }
  }
`;
