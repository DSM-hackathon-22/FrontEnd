import styled from "styled-components";
import logo from "../assets/Finx.svg";
import { Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../Utils/cookies";

function Header() {
  const navigate = useNavigate();
  const LogOutStart = () => {
    navigate("/login");
    deleteCookie("access_token");
  };

  const FieldNav = () => {
    navigate("/");
  };

  return (
    <HeaderBox>
      <LogoImg src={logo} alt="로고 이미지" />
      <CategoryAll>
        <NavLogOut onClick={FieldNav}>분야 선택하기</NavLogOut>
        <SignUpBtn type="button" value={"로그아웃"} onClick={LogOutStart} />
      </CategoryAll>
    </HeaderBox>
  );
}

const CategoryAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
`;

const NavLogOut = styled.div`
  cursor: pointer;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 55vw; */

  box-shadow: 0px 4px 4px -1px #acacac;
  padding: 14px 10vw;
  width: 100vw;
`;

const LogoImg = styled.img``;

const SignUpBtn = styled.input`
  color: #ffffff;
  width: 122px;
  font-size: 14px;
  height: 36px;
  background-color: #2f5dff;
  border: none;
  border-radius: 100px;
  cursor: pointer;
`;

export default Header;
