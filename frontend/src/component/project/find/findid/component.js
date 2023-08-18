/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../../../styles/theme";

export const Resultblock = ({ children }) => (
  <div
    css={css`
      width: 100%;
      margin: 0 auto;
      display: flex;
      text-align: center;
      align-items: center; /* 수직 가운데 정렬 */
      justify-content: center;
      flex-direction: column;
      border-radius: 5px 5px 0px 0px;
      padding: 4rem;
      color: #76c56f;
      background: #fff;
      box-sizing: border-box;
      ${theme.textVariants.body3_bold}
    `}
  >
    {children}
  </div>
);
