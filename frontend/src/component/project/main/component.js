import styled from 'styled-components';
import bannerImg from '../../../img/main/mainTop.png';
import ProviderImg from '../../../img/main/BoardLinkprovider.svg';
import SellerImg from '../../../img/main/BoardLinkSeller.svg';
import BoardLink02TalkImg01 from '../../../img/main/BoardLinkTalk01.png';
import BoardLink02TalkImg02 from '../../../img/main/BoardLinkTalk02.png';
import AIlogo from '../../../img/main/AIimg.png';
import Match from '../../../img/main/Matching.png';
import theme from "../../../styles/theme";

export const TopBannerArea = styled.section`
  background: url(${bannerImg}) no-repeat center center;
  background-size: cover;
  position: relative;  
  width: 100%;
  height: 37rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 68rem;
  height: 20.9rem;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
export const TextHeader = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;
 align-content: center;
 justify-content: center;
 gap: 2rem;
 img{
  width: 130px;
  height: 200px;
 }
 
`
export const Texth2 = styled.h2`
  color: #FFF;
  text-align: center;
  ${theme.textVariants.body6_bold}
  span {
   color: #FCFF7C;
  }
`;

export const Texth1 = styled.h1`
 color: #FFF;
 text-align: center;
 font-size: 7.5rem;
 font-style: normal;
 font-weight: 700;
 line-height: 20px; /* 22.222% */

`;

export const Hrblock = styled.div`
 width: 100%;
 height: 2rem;
`

export const BoardLinktexth2 = styled.h2`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 50% */
  width: 1628px;
`;

export const BoardLinkgroup = styled.div`
  width: 102rem;
  background-color: azure;
  display: flex;
  justify-content: space-between;

`;

export const BoardLinkprovider = styled.div`
  width: 788px;
  height: 492px;
  flex-shrink: 0;
  background-color: #BBEAB7;
  background-image: url(${ProviderImg});
  background-repeat: no-repeat;
  background-position: right 20px bottom 35px;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 0; /* 초기에 숨김 */
  transform: translateX(-20px); /* 초기 위치 설정 */
  transition: opacity 1s ease, transform 1s ease; /* 애니메이션 효과 */
  ${({ isAnimated }) =>
      isAnimated &&
      `
     opacity: 1;
     transform: translateX(0);
   `}
 `;


export const BoardLinkSeller = styled.div`
  width: 788px;
  height: 492px;
  flex-shrink: 0;
  background-color: #C0E0EE;
  background-image: url(${SellerImg});
  background-repeat: no-repeat;
  background-position: right 20px bottom 35px;
  opacity: 0; /* 초기에 숨김 */
  transform: translateX(20px); /* 초기 위치 설정 */
  transition: opacity 1s ease, transform 1s ease; /* 애니메이션 효과 */
  ${({ isAnimated }) =>
      isAnimated &&
      `
     opacity: 1;
     transform: translateY(0);
   `}
 `;

export const BoardLinkTextbox = styled.div`
  width: 444px;
  height: 132px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 40px;
`;

export const BoardLinktexth3 = styled.h3`
  color: #262626;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
`;

export const BoardLinktexth1 = styled.h1`
  color: #262626;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  margin-top: -45px;
`;

export const BoardLinkButton = styled.div`
  width: 433px;
  height: 82px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFF;
 color: #000;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  display:flex;
  justify-content: center;     
  align-items: center;
  margin-top: 125px;
  margin-left: 40px;
`;

export const PriceArea = styled.section`
 height: auto;
 display: flex;
 flex-direction: column;
 align-items: center;
 opacity: 0;
 transform: translateY(20px); /* 아래로 초기 이동 설정 */
 transition: opacity 1s ease, transform 1s ease;
 gap: 5rem;
 ${({ isAnimated2 }) =>
     isAnimated2 &&
     `
     opacity: 1;
     transform: translateY(0); /* 위로 이동하여 나타나도록 설정 */
   `}
`;


export const PriceMoreBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceMoreText = styled.h2`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
`;

export const PriceMoreButton = styled.div`
  width: 12rem;
  height: 3.5rem;
  border-radius: 2rem;
  background: #76C56F;
  color: #FFF;
  display: flex;
  justify-content: center; 
  align-items: center;
 ${theme.textVariants.body2_bold}
`;

export const PriceList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
gap:8rem;
`;

export const PriceItem = styled.div`
 width: 28.125rem;
 height: 37.5rem;
 display: flex;
 background-image: url(${props => props.backgroundImage});
 background-repeat: no-repeat;
 transition: transform 0.3s ease; /* 애니메이션 효과 */

 &:hover {
  transform: scale(1.1); /* 이미지를 110% 크기로 확대 */
 }
`;

export const PriceItemTextBox = styled.div`
  width: 16.7rem;
  height: 6rem;
  flex-shrink: 0;
  margin-top: 460px;
 
 `;

export const ItemName = styled.h4`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 66.667% */

 `;

export const ItemPrice = styled.h3`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
 `;


export const BoardLink02Talk = styled.div`
 width: 100%;
  height: 77.5rem;
  background: #F1F6F1;
  display: flex;
  flex-direction: column;
  align-items: center;
 opacity: 0;
 transform: translateY(20px); /* 아래로 초기 이동 설정 */
 transition: opacity 1s ease, transform 1s ease;
 ${({ isAnimated3 }) =>
     isAnimated3 &&
     `
     opacity: 1;
     transform: translateY(0); /* 위로 이동하여 나타나도록 설정 */
   `}
 `;

export const BoardLink02TextBox = styled.div`
  width: 71.375rem;
  height: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
 `;

export const BoardLink02Textp = styled.p`
  color: #313431;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  margin-left: 150px;
 `;

export const BoardLink02Texth1 = styled.h1`
  color: #161718;
  text-align: center;
  font-size: 96px;
  font-style: normal;
  font-weight: 600;
  margin-top: -40px;
 `;

export const EmphasisText = styled.span`
  color: #358138;
  font-size: 110px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
 `;


export const BoardLink02TalkImg = styled.div`
  width: 64.75rem;
  height: 24.125rem;
  background-image: url(${BoardLink02TalkImg01});
  border: none;
  margin-right: 43.75rem;
  margin-top: -80px;
 opacity: 0; /* 초기에 숨김 */
 transform: translateX(20px); /* 초기 위치 설정 */
 transition: opacity 1s ease, transform 1s ease; /* 애니메이션 효과 */
 ${({isAnimated3}) =>
     isAnimated3 &&
     `
     opacity: 1;
     transform: translateY(0);
   `}
 \`;
`;

export const BoardLink02TalkImg2 = styled.div`
  width: 64.75rem;
  height: 24.125rem;
  flex-shrink: 0;
  background-image: url(${BoardLink02TalkImg02});
  border: none;
  margin-left: 43.75rem;
  margin-bottom: 2rem;
 opacity: 0; /* 초기에 숨김 */
 transform: translateX(-20px); /* 초기 위치 설정 */
 transition: opacity 1s ease, transform 1s ease; /* 애니메이션 효과 */
 ${({isAnimated3}) =>
     isAnimated3 &&
     `
     opacity: 1;
     transform: translateY(0);
   `}
 \`;
`;

export const AIsystem = styled.div`
  height: 115.625rem;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-top: 7.5rem;
`;

export const AIimg = styled.div`
background-image: url(${AIlogo});
width: 415px;
height: 345px;
flex-shrink: 0;
margin-left:120px;
  opacity: 0; /* 초기에 숨김 */
  transform: translateY(20px); /* 초기 위치 설정 */
  transition: opacity 1s ease, transform 1s ease; /* 애니메이션 효과 */
  ${({isAnimated4}) =>
          isAnimated4 &&
          `
     opacity: 1;
     transform: translateY(0);
   `}
  \`;
   &:hover {
  transform: scale(1.1); /* 이미지를 110% 크기로 확대 */
 }
`;

export const AItext = styled.h3`
width: 1200px;
height: 380px;
flex-shrink: 0;
color: #161718;
text-align: center;
font-size: 64px;
font-style: normal;
font-weight: 600;
line-height: 110px; /* 47% */
`;

export const AIEmphasisText = styled.span`
color: #161718;
text-align: center;
font-size: 100px;
font-style: normal;
font-weight: 700;
`;

export const Matching = styled.div`
width: 1650px;
height: 750px;
display: flex;

`;

export const MatchingImg = styled.div`
width: 763px;
height: 750px;
flex-shrink: 0;
background-image: url(${Match});
background-repeat: no-repeat;
`;

export const MatchingText = styled.h2`
color: #161718;
text-align: right;
 ${theme.textVariants.head1_bold}
margin-top: 535px;
`;

export const MatchingEmphasisText = styled.span`
  color: #161718;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
`;

export const BoardLink03Area = styled.section`
  height: 1250px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const BoardLink03TextBox = styled.div`
  width: 709px;
  height: 470px;
  flex-shrink: 0;
`;

export const BoardLink03Texth3 = styled.h3`
  text-align: center;
 ${theme.textVariants.body7_bold};
`;

export const BoardLink03Texth1 = styled.h1`
  color: #3F9D37;
 margin: 0px;
  text-align: center;
 ${theme.textVariants.head2_bold};
`;

export const BoardLink03Texth2 = styled.h2`
  color: #000;
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 37.5px; /* 58.594% */
`;

export const BoardLink03Button = styled.div`
width: 62.5rem;
height: 10rem;
display: flex;
justify-content: center; 
align-items: center; 
flex-shrink: 0;
border-radius: 100px;
background: #76C56F;
color: #FFF;
font-size: 80px;
font-style: normal;
font-weight: 700;
margin-top: 150px;
`;

export const Footer = styled.div`
height: 466px;
background: #76C56F;

`;