import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const IndexContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const InnerContainer = styled.div`
  margin-top: 100px;
  width: 804px;
  height: 701px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background: #76c56f;
  justify-content: center;
  align-items: center;
`;
export const SignTitle = styled.div`
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 15.5px; /* 32.292% */
  margin-bottom: 60px;
`;
export const SignsecP = styled.div`
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.5px;
  display: flex;
  margin-bottom: 50px;
`;
export const InputId = styled.input`
  width: 636px;
  height: 77px;
  border-radius: 14px;
  background: #fff;
  color: #acc9b4;
  display: flex;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 100% */
  margin-bottom: 30px;
  border: 0px;
  padding: 0px 26px;
  ::placeholder {
    color: #acc9b4;
    font-size: 20px;
  }
`;
export const InputPass = styled.input`
  width: 636px;
  height: 77px;
  border-radius: 14px;
  background: #fff;
  color: #acc9b4;
  display: flex;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 100% */
  border: 0px;
  padding: 0px 26px;
  ::placeholder {
    color: #acc9b4;
    font-size: 20px;
  }
`;
export const SignButton = styled.div`
  width: 636px;
  height: 77px;
  flex-shrink: 0;
  border-radius: 59px;
  background: #3a6e67;
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: inline-flex;
  margin-left: 80px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const Signcheck = styled.div`
  width: 500px;
  height: 50px;
  color: #cee5d4;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 100% */
  display: flex;
  margin-left: 50px;
  justify-content: center;
  a {
    margin: 60px 50px; /* 원하는 간격 크기로 설정 */
  }
`;
