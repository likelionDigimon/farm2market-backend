import React, {useState} from 'react';
import { IndexContainer, InputContent, InputTitle, UploadButton2, WritingBox, } from './component';
import { useSelector } from 'react-redux';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Inquirywriting() {
  const token = useSelector(state => state.token);
  const responseData = useSelector(state => state.responseData);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const check = () => {
    console.log('토큰 값:', token);
    console.log('유저 정보:', responseData.data);

    const questionDto = {
      author: responseData.name,
      content: content,
      title: title
    };

    const on = () => {
      console.log(token);
    }
    axios.post('/', questionDto, {
      headers: {
        'X-AUTH-TOKEN': token,
        'Content-Type': 'application/json',
      },
    })
        .then((response) => {
          console.log('업로드 성공:', response.data);
          navigate("/community");
        })
        .catch((error) => {
          console.error('업로드 에러:', error);
          // Handle error response
        });
  };
  return (
      <IndexContainer>
        <WritingBox>
          <InputTitle placeholder="글 제목" value={title} onChange={handleTitleChange} />
          <InputContent placeholder="글 내용" value={content} onChange={handleContentChange} />
          <UploadButton2 onClick={check}>
            업로드
          </UploadButton2>
        </WritingBox>
      </IndexContainer>
  );
}

export default Inquirywriting;
