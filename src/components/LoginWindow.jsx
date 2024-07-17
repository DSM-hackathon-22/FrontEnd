import styled from "styled-components";
import "../fonts/font.css";
import { useState } from "react";
import OpenEye from "../assets/OpenEye.svg";
import CloseEye from "../assets/CloseEye.svg";
import Password from "./Password";

function LoginWindow() {
  const [id, setId] = useState("");

  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  return (
    <>
      <LoginBoxAll>
        <LoginBox2 />
        <LoginBox1>
          <LoginContents>
            <IdPswTextAll>
              <LoginTextAll>
                <LoginTitle>Login</LoginTitle>
                <LoginDescription>
                  Please use it after registering as a member
                </LoginDescription>
              </LoginTextAll>
              <PassIdAll>
                <InputAll>
                  <InputTitle>Id</InputTitle>
                  <InputBox
                    type="text"
                    placeholder="Please enter your ID"
                    onChange={handleChangeId}
                    value={id}
                    required
                  />
                </InputAll>
                <Password />
              </PassIdAll>
            </IdPswTextAll>
            <LoginBtn>Log In</LoginBtn>
          </LoginContents>
          <SignUpAll>
            <SignUpText>회원이 아니신가요?</SignUpText>
            <SignUp href="#">회원가입</SignUp>
          </SignUpAll>
        </LoginBox1>
      </LoginBoxAll>
    </>
  );
}

const SignUpAll = styled.div`
  display: flex;
  gap: 10px;
`;

const SignUp = styled.a`
  color: #000000;
  font-size: 12px;
  text-decoration: none;
`;

const SignUpText = styled.div`
  color: #9f9f9f;
  font-size: 12px;
`;

const IdPswTextAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const LoginBtn = styled.button`
  width: 400px;
  border-radius: 4px;
  border: none;
  background-color: #2f5dff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Jost;
  padding: 7px;
  cursor: pointer;
`;

const LoginContents = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const LoginTextAll = styled.div``;

const PassIdAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const LoginTitle = styled.h1`
  font-size: 34px;
  color: #2f5dff;
  font-family: Jost;
`;

const LoginDescription = styled.h4`
  font-size: 14px;
  color: #d3d3d3;
  font-family: Jost;
`;

const InputTitle = styled.h6`
  font-size: 10px;
  font-weight: 200;
`;

const InputBox = styled.input`
  border: 0.5px solid #747474;
  width: 400px;
  padding: 10px 13px;
  // height: 42px;
  border-radius: 3px;
  font-size: 10px;
`;

const InputAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const LoginBoxAll = styled.div`
  display: flex;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
`;

const LoginBox1 = styled.div`
  width: 519px;
  height: 530px;
  border: 1px solid #747474;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

const LoginBox2 = styled.div`
  width: 519px;
  height: 530px;
  background-image: url("./src/assets/loginBox.png");
  background-size: cover;
`;

export default LoginWindow;
