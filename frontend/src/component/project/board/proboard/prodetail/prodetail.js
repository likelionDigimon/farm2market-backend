import React from 'react';
import { ChatButton, ChatLogo, ContactBox, ContactContent, ContentBox, ContentImg,
     Explan, ExplanSpan, IndexContainer, InfoText, InfoTextSpan, 
     IntroBox, IntroContent, IntroTitle, ProfileImg, SellerInfo, 
     SellerInfoBox, WantSellerBox, WantSellerContent } from './component';


function ProDetail() {
    return (
        <IndexContainer>
            <ContentBox>
                <ContentImg/>
                <SellerInfoBox>
                    <SellerInfo>
                        <ProfileImg/>
                        <InfoText>
                            맛있는 마켓
                            <br/>
                            <InfoTextSpan>
                            판매자 회원
                            </InfoTextSpan>
                        </InfoText>
                    </SellerInfo>
                    <ChatButton>
                            <ChatLogo/>
                            채팅으로 문의하기
                    </ChatButton>
                </SellerInfoBox>
                <Explan>
                오픈마켓, 스마트 스토어 등 다양한 플랫폼에서 상품을 판매하고 있습니다!
                </Explan>
                <IntroBox>
                    <IntroTitle>소개 정보</IntroTitle>
                    <IntroContent>
                    현재 오픈 마켓과 스마트 스토어 등 많은 플랫폼을 운영하여 높은 매출을 자랑하고 있는 맛있는 마켓입니다.
                     저희 맛있는 마켓에서는 현재 다양한 농산물들을 판매중입니다!
                    </IntroContent>
                </IntroBox>
                <WantSellerBox>
                    <IntroTitle>원하는 공급자</IntroTitle>
                    <WantSellerContent>
                        <ul>
                            <li>품질 좋은 상품을 자랑하는 공급자</li>
                            <li>합리적인 가격을 제공하는 공급자</li>
                        </ul>
                    </WantSellerContent>
                </WantSellerBox>
                <ContactBox>
                    <IntroTitle>연락처</IntroTitle>
                    <ContactContent>
                        02-000-0000
                    </ContactContent>
                </ContactBox>
            </ContentBox>
        </IndexContainer>
        );
    }
    
    export default ProDetail;
    