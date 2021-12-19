import styled from "styled-components";
import { css } from "styled-components";

export const ProgressWrap = styled.div`
  ${(props) => css`
    & > div {
      &:after {
        content: "";
        transition: width 1s;
        width: ${`${props.percent}%`} !important;
      }
    }
  `}
  & > div {
    width: 100%;
    height: 4px;
    /* Gray 20% */

    background: rgba(0, 0, 0, 0.2);
    border-radius: 28px;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 8px;
    &:after {
      content: "";
      position: absolute;
      display: block;
      left: 0;
      /* top: 0; */
      top: 50%;
      transform: translateY(-50%);
      box-sizing: border-box;
      height: 5px;

      /* width: ${props.prevPercent} */
      /* width: 0; */
      background: #6100ff;
      border-radius: 28px;
    }
  }
  & > span {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.4);
  }
`;
