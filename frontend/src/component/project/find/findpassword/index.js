import React, {useState} from "react";
import {
  InnerContainer,
  Inners,
  SignTitle,
  InputContainer,
  SignButton,
  SignInput,
  Cblock,
  CheckContainer,
} from "../../../emotion/component";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setID} from "../../../../redux/auth";
const FindPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name , setName] = useState('');
  const [uid, setUid] = useState('');
  const [phoneNumber ,setphoneNumber] = useState('');

  const onclick = () => {
    axios.get('/sign-api/find-password', {
      params: {
        name: name,
        uid : uid,
        phoneNumber: phoneNumber,

      }
    })
        .then(response => {
          const dataArray = response.data;
          console.log(dataArray);
          dispatch(setID(dataArray));
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }
  return (
    <>
      <Inners gap={'0rem'}>
        <CheckContainer>
          <Link to="/findid">
            <Cblock width="10rem" background={"#E1F0DF"} color="#76C56F">
              아이디 찾기
            </Cblock>
          </Link>
          <Link to="/findpass">
            <Cblock width="10rem" background={"#A1D99D"} color="#F8F9E3">
              비밀번호 찾기
            </Cblock>
          </Link>
        </CheckContainer>
        <InnerContainer width={"50rem"}>
          <SignTitle>비밀번호 찾기</SignTitle>
          <InputContainer>
            <SignInput
                placeholder="아이디를 입력하세요"
                value={uid}
                onChange={(event) => setUid(event.target.value)}
            />
            <SignInput
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <SignInput
                placeholder="가입 시 입력한 휴대폰 번호를 입력하세요"
                value={phoneNumber}
                onChange={(event) => setphoneNumber(event.target.value)}
            />
            <Link to="/findpass/result">
              <SignButton onClick={onclick}>비밀번호 찾기</SignButton>
            </Link>
          </InputContainer>
        </InnerContainer>
      </Inners>
    </>
  );
};

export default FindPassword;
