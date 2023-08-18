
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {
  CreatButton,
  IndexContainer,
  InputArea,
  InputBox,
  InputCharacter,
  InputCharacterBox,
  InputH1,
  InputKeyword,
  InputKeywordBox,
  InputKeywordH2,
  InputProduct,
  InputProductNameBox,
  InputProductNameH2,
  InputSpan,
  InputTrademark,
  InputTrademarkBox,
  InputTrademarkH2,
  OutputArea,
  OutputContent,
  OutputTitle,
  PhotoButton,
  ResetButton,
  UploadButton,
  WritingArea,
} from './component';
import axios from "axios";
import {setToken} from "../../../../redux/auth";

function Prowriting() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [product, setProduct] = useState('');
  const [keyword, setKeyword] = useState('');
  const [file, setFile] = useState(null);
  const token = useSelector(state => state.token);
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const check = () => {
    console.log('토큰 값:', token);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('product', product);
    formData.append('keyword', keyword);

    axios.post('/seller-board', formData, {
      headers: {
        'X-AUTH-TOKEN': token,
        'Content-Type': 'multipart/form-data',
      },
    })
        .then((response) => {
          console.log('업로드 성공:', response.data);
          // Handle success response
        })
        .catch((error) => {
          console.error('업로드 에러:', error);
          // Handle error response
        });
  };

  return (
      <IndexContainer>
        <WritingArea>
          <InputArea>
            <InputH1>
              온라인 등록을 위해 간단한 정보를 입력해주세요!
              <br />
              <InputSpan>구체적인 내용은 인공지능이 대신 작성해줄 거예요.</InputSpan>
            </InputH1>
            <InputBox>
              <InputProductNameBox>
                <InputProductNameH2>상품명</InputProductNameH2>
                <InputProduct
                    id="product"
                    placeholder="예시) 배추,감자"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
              </InputProductNameBox>
              <InputTrademarkBox>
                <InputTrademarkH2>상표명</InputTrademarkH2>
                <InputTrademark
                    id="name"
                    placeholder="예시) 김씨네 농장"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
              </InputTrademarkBox>
              <InputCharacterBox>
                <InputTrademarkH2>상품 특징</InputTrademarkH2>
                <InputCharacter
                    id="price"
                    placeholder="1000원"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
              </InputCharacterBox>
              <InputKeywordBox>
                <InputKeywordH2>키워드</InputKeywordH2>
                <InputKeyword
                    id="keyword"
                    placeholder="예시) 유기농"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
              </InputKeywordBox>
            </InputBox>
            <CreatButton>자동 생성</CreatButton>
            <ResetButton>다시 하기</ResetButton>
          </InputArea>
          <OutputArea>
            <PhotoButton><input type="file" onChange={onFileChange} /></PhotoButton>
            <OutputTitle />
            <OutputContent />
            <UploadButton onClick={onSubmit}>업로드</UploadButton>
          </OutputArea>
        </WritingArea>
      </IndexContainer>
  );
}

export default Prowriting;

