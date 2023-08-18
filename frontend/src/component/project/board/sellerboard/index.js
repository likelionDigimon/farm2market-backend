import React, {useEffect, useState} from "react";
import {
  Button,
  ProjectBox,
  Title,
  FootContainer,
  ButtonContainer,
  Inners,
  InblockContainer,
} from "../../../emotion/component";
import {Link} from "react-router-dom";
import {OuterContainer} from "../agricultboard/component";
import axios from "axios";
const Sellerboard = () => {
  const [Array,setArray] = useState([]);

  useEffect(() => {
    axios.get('/seller-board/getAllSellerBoard')
        .then(response => {
          const dataArray = response.data; // Assuming the response data is an array
          setArray(dataArray);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }, []);

// 한 페이지에서 보여줄 개수
  const items = 8;
  // 현 페이지를 나타낼 상태
  const [currentPage, setCurrentPage] = useState(1);

  // 보여줄 페이지의 범위
  const startIndex = (currentPage - 1) * items;
  const endIndex = startIndex + items;

  // 페이지 범위에 따라 데이터 분할
  const currentItems = Array.slice(startIndex, endIndex);

  // 현 페이지의 상태를 변화 시켜 페이지 이동
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    const totalPages = Math.ceil(Array.length / items);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
      <Inners>
        <OuterContainer>
          <Title>공급자 게시판</Title>
          <ButtonContainer>
            <Link
                to="/seller/wirte"
            >
              <Button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                  <path
                      d="M11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.65822 15.4697 8.5307C14.342 7.403 13.6537 6.2106 13.2348 5.20392L5.83882 12.5999C5.26169 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z"
                      fill="white"
                  />
                  <path
                      d="M20.8487 8.71306C22.3844 7.17735 22.3844 4.68748 20.8487 3.15178C19.313 1.61607 16.8231 1.61607 15.2874 3.15178L14.4004 4.03882C14.4126 4.0755 14.4251 4.11268 14.4382 4.15035C14.7633 5.0875 15.3768 6.31601 16.5308 7.47002C17.6848 8.62403 18.9133 9.23749 19.8505 9.56262C19.888 9.57563 19.925 9.58817 19.9615 9.60026L20.8487 8.71306Z"
                      fill="white"
                  />
                </svg>
                글쓰기
              </Button>
            </Link>

            <Button>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
              >
                <path
                    d="M21.1932 2.80624C22.2681 3.88124 22.2681 5.62415 21.1932 6.69914L20.6976 7.19469C20.5533 7.16345 20.3716 7.11589 20.1645 7.04404C19.6102 6.85172 18.8817 6.48827 18.1964 5.803C17.5111 5.11774 17.1477 4.38923 16.9554 3.8349C16.8835 3.62781 16.836 3.44609 16.8047 3.30179L17.3003 2.80624C18.3753 1.73125 20.1182 1.73125 21.1932 2.80624Z"
                    fill="white"
                />
                <path
                    d="M14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.99089 12.1646C9.17157 11.6225 9.26191 11.3515 9.38344 11.0965C9.52679 10.7957 9.70249 10.5114 9.90743 10.2487C10.0812 10.0259 10.2832 9.82394 10.6872 9.41993L15.6033 4.50385C15.867 5.19804 16.3293 6.05663 17.1363 6.86366C17.9434 7.67069 18.802 8.13296 19.4962 8.39674L14.5801 13.3128Z"
                    fill="white"
                />
                <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 10.8082 21.7915 9.66511 21.409 8.60519L15.586 14.4283C15.2347 14.7797 14.9708 15.0437 14.6738 15.2753C14.3252 15.5473 13.948 15.7804 13.5488 15.9706C13.2088 16.1327 12.8546 16.2506 12.3833 16.4076L9.45143 17.3849C8.64568 17.6535 7.75734 17.4438 7.15678 16.8432C6.55621 16.2427 6.34651 15.3543 6.61509 14.5486L7.59236 11.6167C7.74936 11.1453 7.86732 10.7912 8.02935 10.4512C8.21958 10.052 8.45272 9.6748 8.72466 9.32615C8.9563 9.02918 9.22033 8.76527 9.57173 8.41403L15.3948 2.59098C14.3349 2.20849 13.1918 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="white"
                />
              </svg>
              내가쓴글
            </Button>
          </ButtonContainer>
        </OuterContainer>
        <InblockContainer>
          {currentItems &&
              currentItems.map((project) => (
                  <Link to={`/sellerboard/selldetail/${project.id}`}>
                    <ProjectBox
                        key={project.id}
                        title={project.name}
                        content={project.product}
                        tags={[project.keyword]}
                        imageSrc={project.imageData}
                    />
                  </Link>
              ))}
        </InblockContainer>
        <FootContainer>
          <Button onClick={handlePrevPage}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
              <path
                  d="M8.1649 12.3704L14.7953 18.8001C15.2091 19.2013 16 18.9581 16 18.4297V5.5703C16 5.0419 15.2091 4.7987 14.7953 5.1999L8.1649 11.6296C7.945 11.8427 7.9451 12.1573 8.1649 12.3704Z"
                  fill="white"
              />
            </svg>
            이전 페이지
          </Button>

          <Button onClick={handleNextPage}>
            다음 페이지
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
              <path
                  d="M15.8351 11.6296L9.20467 5.1999C8.79094 4.79869 8 5.04189 8 5.5703V18.4297C8 18.9581 8.79094 19.2013 9.20467 18.8001L15.8351 12.3704C16.055 12.1573 16.0549 11.8427 15.8351 11.6296Z"
                  fill="white"
              />
            </svg>
          </Button>
        </FootContainer>
      </Inners>
  );
};

export default Sellerboard;