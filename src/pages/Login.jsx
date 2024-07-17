import styled from "styled-components";
import LoginWindow from "../components/LoginWindow";

function Login() {
  return (
    <>
      <LoginWindowAll>
        <LoginWindow />
      </LoginWindowAll>
    </>
  );
}



const LoginWindowAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Login;
