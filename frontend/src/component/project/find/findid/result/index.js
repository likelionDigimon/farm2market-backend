import React, {useEffect} from "react";
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
import {useSelector} from "react-redux";

const Findresultid = () => {
  const ID = useSelector(state => state.ID);
  const atIndex = ID.indexOf('@');
  const maskID = (id) => {
    if (id.length >= 7) {
      const maskedPortion = id.substring(4, atIndex).replace(/./g, '*');
      return id.substring(0, 4) + maskedPortion + id.substring(atIndex);
    } else {
      return id;
    }
  };
  const maskedID = maskID(ID);

  return (
    <>
      <Inners gap={'0rem'}>
        <InnerContainer width={"50rem"}>
          <SignTitle>아이디 찾기</SignTitle>
          입력하신 정보와 일치하는 아이디는 아래와 같습니다.
          <InputContainer>
            <Resultblock>{maskedID}</Resultblock>
            <Link to="/signin">
              <SignButton>로그인 하러 가기</SignButton>
            </Link>
          </InputContainer>
        </InnerContainer>
      </Inners>
    </>
  );
};

export default Findresultid;
