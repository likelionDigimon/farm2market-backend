import React, { useState,useEffect } from "react";
import menuLogo from "../../../img/header/menuLogo.svg";
import { Link, useNavigate } from "react-router-dom";
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
import mast from "../../../img/main/Frame.svg"
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../../redux/auth";
const Header = () => {
    const [isBottomNavActive, setBottomNavActive] = useState(false);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogoClick = () => {
        setBottomNavActive(!isBottomNavActive);
    };

    useEffect(() => {
        setBottomNavActive(false);
    }, [navigate]);
    const handleLogout = () => {
        dispatch(logOut());
    };


    return (
        <HeaderContainer>
            <Logo>
                <Link to={"/"}>
                    <img src={mast} width="50px" height="50px" alt="Mast" />
                </Link>
                <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
                    <img src={menuLogo} alt="menuLogo" />
                </div>
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
            {isBottomNavActive && (
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
                        </DropNavGroup>
                    </DropNav>
                </DropdownMenu>
            )}
            <SearchBar placeholder="검색어를 입력하세요" />

                {isLoggedIn ?
                    <Link to={"/" }>
                        <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
                    </Link>
                    :
                    <Link to={"/signin" }>
                        <LoginButton>로그인</LoginButton>
                    </Link>
                }

        </HeaderContainer>
    );
};

export default Header;
