import styled from 'styled-components';
import Profilelogo from '../../../../img/selldetail/profile.svg'
import Likeimg from '../../../../img/communitydetail/likecount.svg'
import Commentimg from '../../../../img/communitydetail/commentcount.svg'
import CommentProfileLogo from '../../../../img/communitydetail/commentwriter.svg'

export const IndexContainer = styled.div`
  width: 1920px;
  background-color: #fff;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction: column;
`;

export const ContentBox = styled.div`
width: 1140px;
height: 1200px;
display: felx;
flex-direction: column;
margin: 200px 0;
`;

export const Title = styled.h1`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 36px;
font-style: normal;
font-weight: 600;
`;

export const Line = styled.div`
width: 1140px;
height: 2px;
background-color: #DFDFDF;
flex-shrink: 0;
margin: 50px 0;
`;

export const WriterInfo = styled.div`
width: 1135px;
display: flex;
justify-content: space-between;
`;

export const WriterProfile = styled.div`
width: 400px;
height: 100px;
flex-shrink: 0;
display: flex;
`;

export const ProfileImg = styled.div`
background: url(${Profilelogo}) no-repeat center center;
width: 97px;
height: 97px;
flex-shrink: 0;
`;
export const InfoText = styled.h1`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 35px;
`;

export const InfoTextSpan = styled.span`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 100% */
`;

export const InfoCount = styled.div`
width: 200px;
display: flex;
justify-content: space-between;
`;

export const ViewCount = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #000;
text-align: right;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 100% */
`;

export const ViewCountNum = styled.div`
color: #000;
text-align: right;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 100% */
`;

export const CommentCount = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #000;
text-align: right;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 100% */
`;

export const CommentCountNum = styled.div`
color: #000;
text-align: right;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 100% */
`;

export const Content = styled.div`
width: 1140px;
height: 200px;
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 400;
`;

export const CountInfoLogo = styled.div`
width: 150px;
margin-top: 100px;
display: flex;
justify-content: space-between;
margin-top: 100px;
`;

export const LikecountSpan = styled.span`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 36px; /* 150% */
`;

export const Likelogo = styled.div`
width: 42px;
height: 42px;
flex-shrink: 0;
background: url(${Likeimg}) no-repeat center center;
`;

export const Commentlogo = styled.div`
width: 42px;
height: 42px;
flex-shrink: 0;
background: url(${Commentimg}) no-repeat center center;
`;

export const CommentCountSpan = styled.span`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 36px; /* 150% */
`;

export const CommentTitle = styled.h2`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 83.333% */
margin-bottom: 50px;
`;

export const CommentBox = styled.div`
width: 1140;
height: 125px;
display: flex;
flex-direction: column;
`;

export const CommentProfile = styled.div`
height: 50px;
flex-shrink: 0;
display: flex;
`;

export const CommentProfileImg = styled.div`
background: url(${CommentProfileLogo}) no-repeat center center;
width: 49px;
height: 49px;
flex-shrink: 0;
`;

export const CommentWriter = styled.div`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 36px; /* 150% */
display: flex;
justify-content: center;
align-items: center;
margin-left: 20px;
`;

export const Comment = styled.div`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 36px; /* 150% */
margin-left: 70px;
`;