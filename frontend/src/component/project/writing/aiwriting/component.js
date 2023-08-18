import styled from 'styled-components';
import theme from "../../../../styles/theme";

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


export const WritingArea = styled.section`
    width: 1620px;
    height: 997px;
    flex-shrink: 0;
    display: flex;
    margin-top: 150px;
    margin-bottom: 150px;
`;

export const InputArea = styled.div`
    width: 620px;
    height: 997px;
    background: #CAE9C7;
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
`;


export const InputH1 = styled.h1`
    width: 473px;
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 83.333% */
`; 

export const InputSpan = styled.span`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.5px;
`;

export const InputBox = styled.div`
    width: 473px;
    height: 496px;
    margin-top: 27px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const InputProductNameBox = styled.div`
    width: 473px;
    height: 90px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
`;

export const InputProductNameH2 = styled.h2`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400; 
    line-height: 20px; /* 100% */
`;

export const InputProduct = styled.input`
    width: 473px;
    height: 51px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    border: none;
`;

export const InputTrademarkBox = styled.div`
    width: 473px;
    height: 90px;
    display: flex;
    flex-direction: column;
`;

export const  InputTrademarkH2 = styled.h2`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400; 
    line-height: 20px; /* 100% */
`;

export const InputTrademark = styled.input`
    width: 473px;
    height: 51px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    border: none;
`;

export const InputCharacterBox = styled.div`
    width: 473px;
    height: 140px;
    display: flex;
    flex-direction: column;
`;

export const  InputCharacterH2 = styled.h2`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400; 
    line-height: 20px; /* 100% */
`;

export const InputCharacter = styled.input`
    width: 473px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    border: none;
`;

export const InputKeywordBox = styled.div`
    width: 473px;
    height: 90px;
    display: flex;
    flex-direction: column;
`;

export const InputKeywordH2 = styled.h2`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400; 
    line-height: 20px; /* 100% */
`;

export const InputKeyword = styled.input`
    width: 473px;
    height: 51px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    border: none;
`;

export const CreatButton = styled.div`
width: 479px;
height: 74px;
display: flex;
justify-content: center; 
align-items: center; 
border-radius: 12px;
background: #76C56F;
color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 83.333% */
margin-top: 92px;
`;

export const ResetButton = styled.div`
width: 479px;
height: 74px;
display: flex;
justify-content: center; 
align-items: center; 
border-radius: 12px;
background: #76C56F;
color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 83.333% */
margin-top: 25px;
`;


export const OutputArea = styled.div`
    width: 999px;
    height: 997px;
    background-color: #F1F6F1;
    display: flex;
    align-items: center; 
    flex-direction: column;
`;


export const PhotoButton = styled.div`
    width: 137px;
    height: 40px;
    display: flex;
    justify-content: center; 
    align-items: center; 
    border-radius: 50px;
    background: #CAE9C7;
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    margin-top: 40px;
    margin-left: 680px;
`;

export const OutputTitle = styled.input`
    width: 811px;
    height: 94px;
    border: none;
    border-radius: 5px;
    background: #FFF;
    margin-top: 20px;
  ${theme.textVariants.body5_bold}
`;

export const OutputContent = styled.textarea`
    width: 811px;
  max-width: 100%;
  height: 488px;
    border: none;
    margin-top: 20px;
  white-space: normal;
${theme.textVariants.body6_bold}
`;

export const UploadButton = styled.div`
    width: 811px;
    height: 179px;
    flex-shrink: 0;
    color: #FFF;
    border-radius: 15px;
    background: #81D87A;
    display: flex;
    justify-content: center; 
    align-items: center; 
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 50% */
    margin-top: 50px;
    cursor: pointer;
`;

export const WritingBox = styled.div`
    width: 1526px;
    height: 1084px;
    margin-top: 150px;
    margin-bottom: 150px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #F1F6F1;
    box-shadow: 9px 12px 28px 0px rgba(152, 160, 151, 0.38);
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
`;

export const InputTitle = styled.input`
    width: 1418px;
    height: 88px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    border: none;
    ${theme.textVariants.body7_bold};
    ::placeholder {  /* 최신 브라우저 */
        color: #393434;
      ${theme.textVariants.body7_bold};
    }
`;

export const InputContent = styled.textarea`
    width: 1418px;
    height: 562px;
    margin-top: 37px;
    background: #FFF;
    border: none;
  border-radius: 1rem;
  ${theme.textVariants.body7_bold};
`;

export const UploadButton2 = styled.div`
    width: 1421px;
    height: 179px;
    margin-top: 67px;
    flex-shrink: 0;
    display: flex;
    justify-content: center; 
    align-items: center;
    border-radius: 15px;
    background: #81D87A;
    color: #FFF;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 50% */
  cursor: pointer;
`;

