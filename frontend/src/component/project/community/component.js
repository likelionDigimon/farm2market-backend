import styled from "@emotion/styled";
import theme from "../../../styles/theme";



export const InnerContainer = styled.div`
  margin-top: 50px;
  width: 1626px;
  height: 701px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  justify-content: center;
`;
export const SignButton = styled.div`
  width: 636px;
  height: 77px;
  flex-shrink: 0;
  border-radius: 59px;
  background: #3a6e67;
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TableContainer = styled.div`

  table {
    width: 100%;
    border-collapse: collapse;
    th {
      border: 1px solid #fff;
      color: #fff;
      padding: 10px;
      background: #76c56f;
    }
    td {
      border: 1px solid #dfdfdf;
      padding: 10px;
    }
    th:nth-of-type(1) {
      width: 1361px;
    }
    th:nth-of-type(2) {
      width: 265px;
    }
    td {
      height: 60px;
    }
    div {
      width: 100%;
      height: 100%;
      border: none;
      background: transparent;
      color: #000;
      display: flex;
      align-items: center;
      ${theme.textVariants.body5_bold}
    }
  }
`;
