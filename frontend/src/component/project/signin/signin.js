import React, {useState} from "react";
import {
    IndexContainer,
    InnerContainer,
    SignButton,
    SignTitle,
    Signcheck,
    SignsecP,
    InputId,
    InputPass,
} from "./component";
import { Nav, NavItem } from "../header/component";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {setResponseData, setToken} from "../../../redux/auth";

const Signin = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const token = useSelector(state => state.token);

    const onclick = () => {
        console.log(
            token
        )
    }
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();


        axios.post(`/sign-api/sign-in?id=${id}&password=${password}&name='CHE'`)
            .then((response) => {
                console.log('로그인 성공!');
                console.log('로그인 결과:', response.data.token);
                console.log('유저 정보:', response.data);
                dispatch(setToken(response.data.token));
                dispatch(setResponseData(response.data));
                navigate('/');
            })
            .catch((error) => {
                console.log('Request failed:', error);
                console.log('로그인 에러:', error);
            });
    };
    return (
        <>
            <IndexContainer>
                <InnerContainer>
                    <SignTitle>Farm2Market</SignTitle>
                    <SignsecP>로그인</SignsecP>
                    <form onSubmit={onSubmit}>
                        <InputId
                            id="email"
                            placeholder="아이디를 입력해주세요"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <InputPass
                            id="password"
                            placeholder="비밀번호를 입력해주세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </form>
                    <Nav>
                        <NavItem as={Link} to="/proboard">
                            <SignButton onClick={onSubmit}>로그인</SignButton>
                        </NavItem>
                    </Nav>

                    <Signcheck>
                        <Link
                            to="/signup"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            회원가입
                        </Link>
                        <Link
                            to="/findid"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            아이디/비밀번호 찾기
                        </Link>
                    </Signcheck>
                </InnerContainer>
            </IndexContainer>
        </>
    );
};
export default Signin;
