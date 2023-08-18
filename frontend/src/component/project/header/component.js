import styled from "styled-components";
import searchLogo from "../../../img/header/searchLogo.svg";
import searchslideLogo from "../../../img/header/searchslideLogo.svg";
import theme from "../../../styles/theme";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 4.25rem;
  background-color: #76c56f;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  margin-left: 4rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 10%;
  gap: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 56.875rem;
  margin-left: 5.5rem;
`;

export const NavItem = styled.a`
  color: #fff;
  width: 10rem;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
`;

export const SearchBar = styled.input.attrs({
    type: "text",
})`
  height: 33px;
  flex-shrink: 0;
  border-radius: 4px;
  border: none;
  margin-left: 80px;
  padding-left: 30px;
  padding-right: 30px;
  background-image: url(${searchLogo}), url(${searchslideLogo});
  background-position: 10px center, calc(100% - 10px) center;
  background-repeat: no-repeat, no-repeat;
  box-sizing: border-box;
  width: 20%;
  
`;

export const LoginButton = styled.div`
  width: 9rem;
  height: 33px;
  flex-shrink: 0;
  border-radius: 55px;
  border: 1px solid #fff;
  color: white;
  ${theme.textVariants.body8_bold};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  margin-left: 55px;
  margin-right: 4rem;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  width: 100%;
  left: 0;
  height: 210px;
  background-color: #76c56f;
  z-index: 10;
`;

export const DropNav = styled.nav`
  display: flex;
  background-color: #76c56f;
  margin-left: 18rem;
  gap: 6.3rem;
`;

export const DropNavGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 37px;
  width: 140px;
  background-color: #76c56f;
`;

export const DropItem = styled.a`
  color: white;
  text-decoration: none;
  height: 31px;
  margin: 10px 0;
  ${theme.textVariants.body8_bold};
`;
