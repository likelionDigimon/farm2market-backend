import styled from 'styled-components';

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
    ::placeholder {  /* 최신 브라우저 */
        color: #393434;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 83.333% */
    }
`;

export const InputContent = styled.input`
    width: 1418px;
    height: 562px;
    margin-top: 37px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
    border: none;
`;

export const UploadButton = styled.div`
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
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 50% */
`;

