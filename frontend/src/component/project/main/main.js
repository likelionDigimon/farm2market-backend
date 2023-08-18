import React, {useState, useEffect} from "react";
import PriceList1 from '../../../img/main/PriceList1.png';
import PriceList2 from '../../../img/main/PriceList2.png';
import PriceList3 from '../../../img/main/PriceList3.png';
import StyledHr from '../../../img/main/StyledHr.svg';
import mast from "../../../img/main/Frame.svg"
import {
    TextContainer, TopBannerArea, Texth2, Texth1,
    BoardLinktexth2, BoardLinkgroup, BoardLinkSeller, BoardLinkprovider,
    BoardLinkButton, BoardLinkTextbox, BoardLinktexth3, BoardLinktexth1,
    PriceArea, PriceMoreBox, PriceMoreText, PriceMoreButton, PriceList,
    PriceItem, PriceItemTextBox, ItemName, ItemPrice,
    BoardLink02Talk, BoardLink02Textp, BoardLink02Texth1, EmphasisText,
    BoardLink02TextBox, BoardLink02TalkImg, BoardLink02TalkImg2, AIsystem,
    AIimg, AItext, AIEmphasisText, Matching, MatchingImg, MatchingText,
    MatchingEmphasisText, BoardLink03Area, BoardLink03TextBox,
    BoardLink03Texth3, BoardLink03Texth1, BoardLink03Texth2,
    BoardLink03Button, Footer, Hrblock, TextHeader
} from './component';
import {Inners2} from "../../emotion/component";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Main = () => {
    const responseData = useSelector(state => state.responseData);
    const [isAnimated, setIsAnimated] = useState(false);
    const [isAnimated2, setIsAnimated2] = useState(false);
    const [isAnimated3, setIsAnimated3] = useState(false);
    const [isAnimated4, setIsAnimated4] = useState(false);

    const animateElement = () => {
        const element = document.querySelector(".first-area");
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight * 0.8) {
            setIsAnimated(true);
        }
        else{
            setIsAnimated(false);
        }
    };
    const animateElement2 = () => {
        const element2 = document.querySelector(".second-area"); // 두 번째 영역을 선택

        const windowHeight = window.innerHeight;
        const elementTop = element2.getBoundingClientRect().top;

        if (elementTop < windowHeight * 0.8) {
            setIsAnimated2(true);
        } else {
            setIsAnimated2(false);
        }
    };
    const animateElement3 = () => {
        const element3 = document.querySelector(".third-area"); // 두 번째 영역을 선택

        const windowHeight = window.innerHeight;
        const elementTop = element3.getBoundingClientRect().top;

        if (elementTop < windowHeight * 0.8) {
            setIsAnimated3(true);
        } else {
            setIsAnimated3(false);
        }
    };

    const animateElement4 = () => {
        const element4 = document.querySelector(".fourth-area"); // 두 번째 영역을 선택

        const windowHeight = window.innerHeight;
        const elementTop = element4.getBoundingClientRect().top;

        if (elementTop < windowHeight * 0.8) {
            setIsAnimated4(true);
        } else {
            setIsAnimated4(false);
        }
    };
    const handleScroll = () => {
        animateElement();
        animateElement2();
        animateElement3();
        animateElement4();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        animateElement();
        animateElement2();
        animateElement3();
        animateElement4();
    }, []);
    return (
        <Inners2>
            <TopBannerArea>
                <TextContainer>
                    <TextHeader>
                        <img src={mast}  alt={mast}/>
                        <Texth1>
                            팜투마켓
                        </Texth1>
                    </TextHeader>
                    <Texth2>
                        온라인 입점이 어려운 <span>농산물 공급자</span>를 도와주는 <span>중개 서비스</span>
                    </Texth2>
                </TextContainer>
            </TopBannerArea>
            <img src={StyledHr} />
            <BoardLinktexth2>간단하게 온라인 등록하기!</BoardLinktexth2>
            <BoardLinkgroup className="first-area">
                <BoardLinkprovider isAnimated={isAnimated} >
                    <BoardLinkTextbox>
                        <BoardLinktexth3>농작물을 제공할 수 있는</BoardLinktexth3>
                        <BoardLinktexth1>공급자라면?</BoardLinktexth1>
                    </BoardLinkTextbox>
                    <Link to={'/proboard'}>
                        <BoardLinkButton>여기 클릭!</BoardLinkButton>
                    </Link>
                </BoardLinkprovider>
                <BoardLinkSeller isAnimated={isAnimated}>
                    <BoardLinkTextbox>
                        <BoardLinktexth3>농작물을 팔 수 있는</BoardLinktexth3>
                        <BoardLinktexth1>판매자라면?</BoardLinktexth1>
                    </BoardLinkTextbox>
                    <Link to={'/sellerboard'}>
                        <BoardLinkButton>여기 클릭!</BoardLinkButton>
                    </Link>
                </BoardLinkSeller>
            </BoardLinkgroup>
            <img src={StyledHr} />
            <PriceArea className="second-area" isAnimated2={isAnimated2}>
                <PriceMoreBox>
                    <PriceMoreText>현재 농작물의 가격은?</PriceMoreText>
                    <Link to={"/agriboard"}>
                        <PriceMoreButton>더보기</PriceMoreButton>
                    </Link>
                </PriceMoreBox>
                <PriceList>
                    <PriceItem backgroundImage={PriceList1}>
                        <PriceItemTextBox>
                            <ItemName>토마토 (5kg)</ItemName>
                            <ItemPrice>15,660원</ItemPrice>
                        </PriceItemTextBox>
                    </PriceItem>
                    <PriceItem backgroundImage={PriceList2}>
                        <PriceItemTextBox>
                            <ItemName>감자 (20kg)</ItemName>
                            <ItemPrice>42,200원</ItemPrice>
                        </PriceItemTextBox>
                    </PriceItem>
                    <PriceItem backgroundImage={PriceList3}>
                        <PriceItemTextBox>
                            <ItemName>브로콜리 (8kg)</ItemName>
                            <ItemPrice>41,560원</ItemPrice>
                        </PriceItemTextBox>
                    </PriceItem>
                </PriceList>
            </PriceArea>
            <img src={StyledHr} />
            <BoardLink02Talk isAnimated3={isAnimated3}>
                <BoardLink02TextBox>
                    <BoardLink02Textp>농산물 판매를 위해서</BoardLink02Textp>
                    <BoardLink02Texth1>
                        온라인 등록을 할 때
                        <br/>
                        <EmphasisText>어려움</EmphasisText>을 겪어보셨나요?
                    </BoardLink02Texth1>
                </BoardLink02TextBox>
                <BoardLink02TalkImg className="third-area" isAnimated3={isAnimated3}/>
                <BoardLink02TalkImg2 isAnimated3={isAnimated3}/>
            </BoardLink02Talk>
            <AIsystem className="fourth-area" isAnimated4={isAnimated4}>
                <AIimg isAnimated4={isAnimated4}/>
                <AItext>
                    <AIEmphasisText>인공지능 시스템</AIEmphasisText>이
                    <br/>
                    어려웠던 온라인 등록을 도와주기 때문에
                    <br/>
                    편하게 온라인 입점이 가능해요!
                </AItext>
                <Matching>
                    <MatchingImg/>
                    <MatchingText>
                        온라인 입점 후 공급자와
                        <br/>
                        <MatchingEmphasisText>
                            판매자의 매칭까지!
                        </MatchingEmphasisText>
                    </MatchingText>
                </Matching>
            </AIsystem>
            <BoardLink03Area>
                <BoardLink03TextBox>
                    <BoardLink03Texth3>
                        온라인 입점이 어려운 농산물 공급자를
                        도와주는 새로운 중개 서비스
                    </BoardLink03Texth3>
                    <BoardLink03Texth1>팜투마켓</BoardLink03Texth1>
                    <BoardLink03Texth2>
                        지금 바로 경험해보세요!
                    </BoardLink03Texth2>
                </BoardLink03TextBox>
                <Link to={'/proboard'}>
                    <BoardLink03Button>등록 하러 가기!</BoardLink03Button>
                </Link>
            </BoardLink03Area>
            <Footer/>
        </Inners2>
    );
};

export default Main;