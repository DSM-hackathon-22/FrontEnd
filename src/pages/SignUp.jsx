import Password from "../components/Password";
import styled from "styled-components";
import SignUpWindow from "../components/SignUpWindow";

function SignUp() {
  return (
    <>
      <SignUpWindowAll>
        <SignUpWindow />
      </SignUpWindowAll>
    </>
  );
}

const SignUpWindowAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default SignUp;
