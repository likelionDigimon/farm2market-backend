import React, { useState } from "react";
import menuLogo from "../../../img/header/menuLogo.svg";
import { Link } from "react-router-dom"; // react-router-dom 라이브러리 추가
import {
    HeaderContainer,
    Logo,
    Nav,
    NavItem,
    DropdownMenu,
    DropNav,
    DropNavGroup,
    DropItem,
    SearchBar,
    LoginButton,
} from "./component";

const Header = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    return (
        <HeaderContainer
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
        >
            <Logo>
                <img src={menuLogo} alt="menuLogo" />
            </Logo>
            <Nav>
                <NavItem as={Link} to="/proboard">
                    게시판
                </NavItem>
                <NavItem as={Link} to="/agriboard">
                    농산물
                </NavItem>
                <NavItem as={Link} to="/community">
                    커뮤니티
                </NavItem>
                <NavItem as={Link} to="/mypage">
                    마이페이지
                </NavItem>
            </Nav>
            {isDropdownVisible && (
                <DropdownMenu>
                    <DropNav>
                        <DropNavGroup>
                            <DropItem as={Link} to="/proboard">
                                판매자 정보 게시판
                            </DropItem>
                            <DropItem as={Link} to="/sellerboard">
                                농산물 등록 게시판
                            </DropItem>
                            <DropItem as={Link} to="/Inquiry/personal">
                                고객 문의
                            </DropItem>
                        </DropNavGroup>
                        <DropNavGroup>
                            <DropItem as={Link} to="/agriboard">
                                가격 정보 보기
                            </DropItem>
                        </DropNavGroup>
                        <DropNavGroup>
                            <DropItem as={Link} to="/community">
                                소통 하기
                            </DropItem>
                        </DropNavGroup>
                        <DropNavGroup>
                            <DropItem as={Link} to="/sellerboard/selldetail">
                                정보 수정
                            </DropItem>
                        </DropNavGroup>
                    </DropNav>
                </DropdownMenu>
            )}
            <SearchBar placeholder="검색어를 입력하세요" />
            <Nav>
                <NavItem as={Link} to="/signin">
                    <LoginButton>로그인</LoginButton>
                </NavItem>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
