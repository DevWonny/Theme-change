import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { dark, white } from "../modules/theme";

const Main = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const onChangeTheme = () => {
    if (!mode) {
      dispatch(dark());
    } else {
      dispatch(white());
    }
  };

  return (
    <MainContainer>
      <ChangeButton onClick={onChangeTheme}>Change</ChangeButton>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChangeButton = styled.button`
  width: 50%;
  height: 30%;
  border: none;
  border-radius: 100px;
  background-color: aqua;
  cursor: pointer;
`;
