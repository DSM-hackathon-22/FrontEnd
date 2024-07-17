import styled from "styled-components";
import Header from "../components/HeaderBefore";
import { BoxCheck } from "../components/BoxCheck";
import { useState } from "react";

import IT from "../assets/IT.svg";
import Finance from "../assets/Finance.svg";
import Healthcare from "../assets/Healthcare.svg";
import FreeConsumerGoods from "../assets/FreeConsumerGoods.svg";
import CommunicationService from "../assets/CommunicationService.svg";
import IndustrialGoods from "../assets/IndustrialGoods.svg";
import ConsumerGoods from "../assets/ConsumerGoods.svg";
import Energy from "../assets/Energy.svg";
import Utilities from "../assets/Utilities.svg";
import RealEstateMaterials from "../assets/RealEstateMaterials.svg";
import Material from "../assets/Material.svg";

function Main() {
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedBoxIndex(selectedBoxIndex === index ? null : index);
  };

  const boxes = [
    { name: "IT", image: IT },
    { name: "금융", image: Finance },
    { name: "헬스케어", image: Healthcare },
    { name: "자유소비재", image: FreeConsumerGoods },
    { name: "소통서비스", image: CommunicationService },
    { name: "산업재", image: IndustrialGoods },
    { name: "필수소비재", image: ConsumerGoods },
    { name: "에너지", image: Energy },
    { name: "유틸리티", image: Utilities },
    { name: "부동산소재", image: RealEstateMaterials },
    { name: "소재", image: Material },
  ];

  return (
    <>
      <Header />
      <Wrapper>
        <ButtonBox>
          <BigBox>
            <div style={{ fontSize: "25px" }}>
              Q. 어떤 분야에 관심이 있으세요?
            </div>
            <Line />
            <Box>
              {boxes.slice(0, 6).map((box, index) => (
                <BoxCheck
                  key={index}
                  name={box.name}
                  image={box.image}
                  click={selectedBoxIndex === index}
                  onClick={() => handleClick(index)}
                />
              ))}
            </Box>
            <Box>
              {boxes.slice(6).map((box, index) => (
                <BoxCheck
                  key={index + 6}
                  name={box.name}
                  image={box.image}
                  click={selectedBoxIndex === index + 6}
                  onClick={() => handleClick(index + 6)}
                />
              ))}
            </Box>
          </BigBox>
          <Button>선택 완료</Button>
        </ButtonBox>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 93vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  width: 1380px;
`;

const BigBox = styled.div`
  height: 630px;
  border: 1px solid #cacaca;
  border-radius: 10px;
  padding: 40px;
  width: 1380px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 30px;
  background-color: #cacaca;
  margin-bottom: 76px;
`;

const Box = styled.div`
  gap: 59px;
  display: flex;
  flex-direction: row;
  margin-bottom: 59.14px;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: #2f5dff;
  float: right;
  font-size: 20px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 19px;
`;

export default Main;
