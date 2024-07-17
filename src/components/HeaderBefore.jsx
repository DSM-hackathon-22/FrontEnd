import styled from "styled-components";
import logo from "../assets/Finx.svg";
import { Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const LoginPageStart = () => {
    navigate("/Login");
  };

  return (
    <HeaderBox>
      <LogoImg src={logo} alt="로고 이미지" />
      <SignUpBtn type="button" value={"로그인"} onClick={LoginPageStart} />
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
