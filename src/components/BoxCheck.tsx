import React, { useState } from "react";
import styled from "styled-components";

interface propsType {
  name: string;
  image: string;
  click: boolean;
  onClick: () => void;
}

export function BoxCheck({ name, image, click, onClick }: propsType) {
  return (
    <LittleBox click={click} onClick={onClick}>
      <BoxType>
        <Icon src={image} />
        <P>{name}</P>
      </BoxType>
    </LittleBox>
  );
}

const LittleBox = styled.div<{
  click: boolean;
}>`
  display: flex;
  width: 154px;
  height: 142px;
  border: ${({ click }) => (click ? "3px solid #2F5DFF" : "3px solid #cacaca")};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  gap: 7px;
`;

const BoxType = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img`
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  font-size: 16px;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
