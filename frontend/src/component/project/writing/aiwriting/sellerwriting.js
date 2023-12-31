// AIWriting.js

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
import {useNavigate} from "react-router-dom";

function Sellerwriting() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [product, setProduct] = useState('');
  const [keyword, setKeyword] = useState('');
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('test');
  const navigate = useNavigate();
  const token = useSelector(state => state.token);
  function compressImage(file, maxWidth, maxHeight, quality) {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }

        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
            (blob) => {
              resolve(blob);
            },
            'image/jpeg', // 이미지 포맷 설정 (다른 포맷도 가능)
            quality // 이미지 품질 설정 (0~1)
        );
      };

      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  }

  const onFileChange = async (event) => {
    const selectedFile = event.target.files[0];

    const compressedBlob = await compressImage(selectedFile, 300, 300, 0.5); // 예시 설정

    setFile(compressedBlob);
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
          navigate("/sellerboard");
          // Handle success response
        })
        .catch((error) => {
          console.error('업로드 에러:', error);
          // Handle error response
        });
  };
  const onCheck = (e) => {
    e.preventDefault();

    const promotionTitle = `상표명은 ${name} 이고 여기서 팔고있는 상품들은 
    ${product}가 있어 이 상품의 가격은 ${price}원이고 핵심 키워드는 
    ${keyword}가 있어 내가 적은 내용들을 바탕으로 적당한 홍보 제목을 1줄 이내로 작성해줘`;
    axios.get('/chat', {
      headers: {
        'X-AUTH-TOKEN': token
      },
      params: {
        prompt: promotionTitle,
      }
    })
        .then((response) => {
          console.log('성공:', response.data);
          setTitle(response.data);
        })
        .catch((error) => {
          console.error('업로드 에러:', error);
          // Handle error response
        });
    const promotionMessage = `상표명은 ${name} 이고 여기서 팔고있는 상품들은 
    ${product}가 있어 이 상품의 가격은 ${price}원이고 핵심 키워드는 
    ${keyword}가 있어 내가 적은 내용들을 바탕으로 적당한 홍보 멘트를 그럴싸하게 3줄로 작성해줘`;

    axios.get('/chat', {
      headers: {
        'X-AUTH-TOKEN': token
      },
      params: {
        prompt: promotionMessage,
      }
    })
        .then((response) => {
          console.log('성공:', response.data);
          setBody(response.data);
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
            <CreatButton onClick={onCheck}>자동 생성</CreatButton>
            <ResetButton>다시 하기</ResetButton>
          </InputArea>
          <OutputArea>
            <PhotoButton><input type="file" onChange={onFileChange} /></PhotoButton>
            <OutputTitle value={title} onChange={(e) => setValue(e.target.value)}/>
            <OutputContent value={body} onChange={(e) => setValue(e.target.value)}/>
            <UploadButton onClick={onSubmit}>업로드</UploadButton>
          </OutputArea>
        </WritingArea>
      </IndexContainer>
  );
}

export default Sellerwriting;
