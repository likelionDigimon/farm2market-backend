import React, { useState } from "react";
import {
    InnerContainer,
    Inners,
    SignTitle,
    InputContainer,
    SignInput,
    SignP,
} from "../../emotion/component";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' });
    const onSubmit = (data) => {
        // 서버로 데이터 전송 또는 다른 로직 처리
        axios
            .post('/sign-api/sign-up', null, {
                params: {
                    id: data.email, // 이메일 입력 값
                    name: data.name, // 이름 입력 값
                    password: data.password, // 비밀번호 입력 값
                    phonenumber: data.phoneNumber, // 휴대폰 번호 입력 값
                    role: 'ADMIN',
                },
            })
            .then((response) => {
                console.log('회원가입 성공!');
                console.log('회원가입 결과:', response.data);
                navigate("/signin");
            })
            .catch((error) => {
                console.error('회원가입 에러:', error);
            });
    };

    return (
        <>
            <Inners>
                <InnerContainer width={"50rem"}>
                    <SignTitle>회원가입!</SignTitle>
                    {/* 폼 제출 시 onSubmit 함수 호출 */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputContainer>
                            <div>
                                <SignInput
                                    id="email"
                                    placeholder="사용할 아이디를 입력하세요"
                                    {...register("email", {
                                        required: "이메일을 입력하세요",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "유효한 이메일 주소를 입력하세요",
                                        },
                                    })}
                                />
                                {errors.email && <SignP>{errors.email.message}</SignP>}
                            </div>

                            <div>
                                <SignInput
                                    id="password"
                                    placeholder="사용할 비밀번호를 입력하세요"
                                    {...register("password", {
                                        required: "비밀번호를 입력하세요",
                                        minLength: {
                                            value: 8,
                                            message: "비밀번호는 최소 8자 이상이어야 합니다",
                                        },
                                    })}
                                />
                                {errors.password && <SignP>{errors.password.message}</SignP>}
                            </div>

                            <div>
                                <SignInput
                                    id="name"
                                    placeholder="이름을 입력하세요"
                                    {...register("name", {
                                        required: "이름을 입력하세요",
                                    })}
                                />
                                {errors.name && <SignP>{errors.name.message}</SignP>}
                            </div>

                            <div>
                                <SignInput
                                    id="phoneNumber"
                                    placeholder="휴대폰 번호를 입력하세요"
                                    {...register("phoneNumber", {
                                        required: "휴대폰 번호를 입력하세요",
                                        pattern: {
                                            value: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/i,
                                            message:
                                                "유효한 휴대폰 번호를 입력하세요 (000-0000-0000 형식)",
                                        },
                                    })}
                                />
                                {errors.phoneNumber && (
                                    <SignP>{errors.phoneNumber.message}</SignP>
                                )}
                            </div>

                            <div>
                                <button type="submit">가입 하기</button>
                            </div>
                        </InputContainer>
                    </form>
                </InnerContainer>
            </Inners>
        </>
    );
};

export default Signup;
