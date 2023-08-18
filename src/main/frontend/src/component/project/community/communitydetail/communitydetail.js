import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { CommentCount, CommentCountNum, ContentBox, IndexContainer,
     InfoCount, InfoText, InfoTextSpan, Line, ProfileImg, Title,
     Content, ViewCount, ViewCountNum, WriterInfo, WriterProfile, CountInfoLogo, Likelogo, CommentTitle, CommentBox, CommentProfile, CommentProfileImg, CommentWriter, Comment, LikecountSpan, Commentlogo, CommentCountSpan } from './component';

import axios from 'axios';


function CommunityDetail() {
    const [data, setData] = useState(null);
    const { id } = useParams();  // URL로부터 게시물 ID 가져오기
    const token = useSelector(state => state.token);
    const responseData = useSelector(state => state.responseData);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
  
    const check = () => {
      console.log('토큰 값:', token);
      console.log('유저 정보:', responseData.data);
    }  

  

      useEffect(() => {
        // API에서 데이터 가져오기
        axios.get(`/?id=1`, {
            headers: {
              'X-AUTH-TOKEN': token,
              'Content-Type': 'application/json',
            },
          })
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id, token]);
    

    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <IndexContainer>
            <ContentBox>
            <Title>{data.title}</Title>
                <Line/>
                <WriterInfo>
                    <WriterProfile>
                        <ProfileImg/>
                        <InfoText>
                            뽀빠이 농장
                            <br/>
                            <InfoTextSpan>
                                공급자 회원
                            </InfoTextSpan>
                            </InfoText>
                    </WriterProfile>
                    <InfoCount>
                        <ViewCount>
                            조회수
                            <ViewCountNum>9</ViewCountNum>
                        </ViewCount>
                        <CommentCount>
                            댓글
                            <CommentCountNum>2</CommentCountNum>
                        </CommentCount>
                    </InfoCount>
                </WriterInfo>
                <Line />
                <Content>{data.content}</Content>
                <CountInfoLogo>
                    <Likelogo/>
                    <LikecountSpan>9</LikecountSpan>
                    <Commentlogo/>
                    <CommentCountSpan>2</CommentCountSpan>
                </CountInfoLogo>
                <Line />
                <CommentTitle>댓글</CommentTitle>
                <CommentBox>
                    <CommentProfile>
                        <CommentProfileImg/>
                        <CommentWriter>팜투게더</CommentWriter>
                    </CommentProfile>
                    <Comment>
                        스마트 스토어 첫 판매 축하드립니다!
                    </Comment>
                </CommentBox>
                <Line />
                <CommentBox>
                    <CommentProfile>
                        <CommentProfileImg/>
                        <CommentWriter>착한마켓</CommentWriter>
                    </CommentProfile>
                    <Comment>
                        덕분에 성공적으로 판매 완료 되었습니다. 감사합니다!
                    </Comment>
                </CommentBox>
                <Line />
            </ContentBox>
        </IndexContainer>
        );
    }
    
    export default CommunityDetail;
    