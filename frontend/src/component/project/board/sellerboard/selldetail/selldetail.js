import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom'; // Link 컴포넌트 추가
import { useSelector } from 'react-redux';
import {
    ChatButton, ChatLogo, ContactBox, ContactContent, ContentBox, ContentImg,
    Explan, ExplanSpan, IndexContainer, InfoText, InfoTextSpan,
    IntroBox, IntroContent, IntroTitle, ProfileImg, SellerInfo,
    SellerInfoBox, WantSellerBox, WantSellerContent
} from './component';
import axios from "axios";


function SellDetail() {
    const [data, setData] = useState({});
    const token = useSelector(state => state.token);
    const { id } = useParams(); // 바깥으로 이동

    useEffect(() => {
        axios.get(`/seller-board/${id}`, {
            headers: {
                'X-AUTH-TOKEN': `${token}`
            }
        })
            .then(response => {
                const dataArray = response.data;
                setData(dataArray);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]); // 의존성 배열에 id 추가

    function handleDelete() {
        axios.delete(`/seller-board?id=${id}`, { // id 사용
            headers: {
                'X-AUTH-TOKEN': `${token}`
            }
        })
            .then(response => {
                console.log("성공적으로 삭제되었습니다.", response.data);
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
    }
    return (
        <IndexContainer>
            <ContentBox>
                <ContentImg />
                <SellerInfoBox>
                    <SellerInfo>
                        <ProfileImg />
                        <InfoText>
                            {data.name && (
                                <>
                                    {data.name}<br />
                                    <InfoTextSpan>
                                        공급자 회원
                                    </InfoTextSpan>
                                </>
                            )}
                        </InfoText>
                    </SellerInfo>
                    <ChatButton>
                        <ChatLogo />
                        채팅으로 문의하기
                    </ChatButton>
                    <button onClick={handleDelete}>삭제</button> {/* 삭제 버튼 */}
                    <Link to={`/sellerboard/selldetail/${id}/sellupdate`}>
                        <button>수정하기</button>
                    </Link>
                </SellerInfoBox>
                <Explan>
                    영양가 높은{' '}
                    <ExplanSpan>{data.product}</ExplanSpan>
                    판매 중입니다.
                </Explan>
                <IntroBox>
                    <IntroTitle>소개 정보</IntroTitle>
                    <IntroContent>
                        {data.name && (
                            <>
                                믿을 수 있는 국내 산지에서 수확한 {data.product}를 키우고 있는 {data.name}입니다. 저희 {data.name}에서는 소비자가 믿고 먹을 수 있도록 항상 최상의 품질만을 보장하고 있습니다.
                                {data.product}의 가격은 {data.price}입니다.
                            </>
                        )}
                    </IntroContent>
                </IntroBox>
                <WantSellerBox>
                    <IntroTitle>원하는 판매자</IntroTitle>
                    <WantSellerContent>
                        <ul>
                            <li>다양한 플랫폼을 사용하는 판매자</li>
                            <li>성실한 판매자</li>
                            <li>경험이 많은 판매자</li>
                        </ul>
                    </WantSellerContent>
                </WantSellerBox>
            </ContentBox>
        </IndexContainer>
    );
}

export default SellDetail;