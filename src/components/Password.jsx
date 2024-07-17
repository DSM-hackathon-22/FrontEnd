import { useState } from "react";
import styled from "styled-components";
import CloseEye from "../assets/CloseEye.svg";
import OpenEye from "../assets/OpenEye.svg";

function Password() {
  const [showPswd, setShowPswd] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPswd = () => {
    setShowPswd((prevShowPswd) => !prevShowPswd);
  };
  return (
    <InputAll>
      <InputTitle>Password</InputTitle>
      <FakeInputBox>
        <InputBox
          type={showPswd ? "text" : "password"}
          placeholder="Please enter a password"
          onChange={handleChangePassword}
          value={password}
          required
        />
        <PassWordEyes onClick={toggleShowPswd} className="PassWordEyes">
          {showPswd ? (
            <img src={OpenEye} alt="Show Password" />
          ) : (
            <img src={CloseEye} alt="Hide Password" />
          )}
        </PassWordEyes>
      </FakeInputBox>
    </InputAll>
  );
}

const FakeInputBox = styled.div`
  position: relative;
  height: 33.6px;
  width: 400px;
`;

const PassWordEyes = styled.div`
  position: absolute;
  top: 9px;
  right: 11px;
  cursor: pointer;
`;

const InputAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
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
  position: relative;
`;

export default Password;
