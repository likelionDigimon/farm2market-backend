import React from "react";
import {
  InnerContainer,
  Inners,
  SignTitle,
  InputContainer,
  SignButton,
  SignInput,
  Cblock,
  CheckContainer,
} from "../../../../emotion/component";
import { Link } from "react-router-dom";
import { Resultblock } from "./component";

const Findresultpass = () => {
  return (
    <>
      <Inners>
        <CheckContainer>
          <Link to="/findid">
            <Cblock width="10rem" background="#E1F0DF" color="#76C56F">
              아이디 찾기
            </Cblock>
          </Link>
          <Link to="/findpass">
            <Cblock width="10rem" background="#A1D99D" color="#F8F9E3">
              비밀번호 찾기
            </Cblock>
          </Link>
        </CheckContainer>
        <InnerContainer width={"50rem"}>
          <SignTitle>비밀번호 찾기</SignTitle>
          입력하신 정보와 일치하는 비밀번호는 아래와 같습니다.
          <InputContainer>
            <Resultblock>000***</Resultblock>
            <Link to="/">
              <SignButton>로그인 하러 가기</SignButton>
            </Link>
          </InputContainer>
        </InnerContainer>
      </Inners>
    </>
  );
};

export default Findresultpass;
