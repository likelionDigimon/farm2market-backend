import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Container,
  Title,
  ButtonContainer,
  Button, Inners,
} from "../../../emotion/component";
import {Link} from "react-router-dom";
const PersonalInquiry = () => {
  const OuterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  `;

  const TableContainer = styled.div`
    margin-top: 40px;
    padding: 0 147px;
    table {
      width: 100%;
      border-collapse: collapse;
      th {
        border: 1px solid #fff;
        color: #fff;
        padding: 10px;
        background: #76c56f;
      }
      td {
        border: 1px solid #dfdfdf;
        padding: 10px;
      }
      th:nth-of-type(1) {
        width: 1361px;
      }
      th:nth-of-type(2) {
        width: 265px;
      }
      td {
        height: 60px;
      }
      input {
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        color: #000;
        text-align: center;
        font-feature-settings: "clig" off, "liga" off;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 900;
      }
    }
  `;

  const [data, setData] = useState([
    { id: 1, title: "문의 내용", author: "완료" },
    { id: 2, title: "문의 내용", author: "완료" },
    { id: 3, title: "문의 내용", author: "진행중" },
    { id: 4, title: "문의 내용", author: "진행중" },
    { id: 5, title: "문의 내용", author: "완료" },
    { id: 6, title: "", author: "" },
    { id: 7, title: "", author: "" },
    { id: 8, title: "", author: "" },
    { id: 9, title: "", author: "" },
    { id: 10, title: "", author: "" },
  ]);

  const handleTitleChange = (index, value) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        index === i ? { ...item, title: value } : item
      )
    );
  };

  const handleAuthorChange = (index, value) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        index === i ? { ...item, author: value } : item
      )
    );
  };

  return (
    <>
      <Inners>
        <OuterContainer>
          <Title>개인 문의 내용</Title>
          <ButtonContainer>
            <Link to={ "/Inquiry/wirte"}>
              <Button>글쓰기</Button>
            </Link>
            <Button>내가쓴글</Button>
          </ButtonContainer>
        </OuterContainer>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>제목</th>
                <th>답변</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleTitleChange(index, e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.author}
                      onChange={(e) =>
                        handleAuthorChange(index, e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Inners>
    </>
  );
};

export default PersonalInquiry;
