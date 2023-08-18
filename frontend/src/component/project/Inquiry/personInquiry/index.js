import React, {useEffect, useState} from "react";
import {
  Container,
  Title,
  ButtonContainer,
  Button, Inners,
  OuterContainer,
} from "../../../emotion/component"
import {  TableContainer } from "./component";
import {Link} from "react-router-dom";
import axios from "axios";
const Community = () => {
  const [Array,setArray] = useState([]);

  useEffect(() => {
    axios.get('/all')
        .then(response => {
          const dataArray = response.data; // Assuming the response data is an array
          setArray(dataArray);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }, []);
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
      <Inners>
        <OuterContainer>
          <Title>개인 문의 내용</Title>
          <ButtonContainer>
            <Link to={'/Inquiry/wirte'}>
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
              <th>글쓴이</th>
            </tr>
            </thead>
            <tbody>
            {Array.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div>{truncateText(item.title, 30)}</div>
                  </td>
                  <td>
                    <div>{truncateText(item.author, 30)}</div>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </TableContainer>
      </Inners>
  );
};

export default Community;
