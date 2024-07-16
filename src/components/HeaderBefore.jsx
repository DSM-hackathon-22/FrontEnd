import styled from "styled-components";
import logo from "../assets/Finx.svg";

function Header() {
  return (
    <HeaderBox>
      <LogoImg src={logo} alt="로고 이미지" />
      <SignUpBtn type="button" value={"로그인"} />
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px -1px #acacac;
  padding: 14px;
  width: 100vw;
`;

const LogoImg = styled.img`
  margin-left: 360px;
`;

const SignUpBtn = styled.input`
  color: #ffffff;
  width: 122px;
  font-size: 14px;
  height: 36px;
  background-color: #2f5dff;
  border: none;
  border-radius: 100px;
  margin-right: 400px;
`;

export default Header;
