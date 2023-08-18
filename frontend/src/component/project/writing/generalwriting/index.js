import React from 'react';
import { IndexContainer, InputContent, InputTitle, UploadButton, WritingBox, } from './component';

function GenralWriting() {
  return (
    <IndexContainer>
        <WritingBox>
            <InputTitle placeholder="글 제목"/>
            <InputContent placeholder="글 내용"/>
            <UploadButton>
            업로드
            </UploadButton>
        </WritingBox>
    </IndexContainer>
  );
}

export default GenralWriting;
