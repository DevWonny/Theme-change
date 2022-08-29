import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { dark, white } from "../modules/theme";
import GlobalStyle from "../common/GlobalStyle";

const Main = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  console.log(mode);
  const test = localStorage.getItem("theme");
  const onChangeTheme = () => {
    if (mode) {
      dispatch(white());
    } else {
      dispatch(dark());
    }
  };

  return (
    <>
      <MainContainer>
        <p>test</p>
        <ChangeButton onClick={onChangeTheme}>Change</ChangeButton>
      </MainContainer>
      <GlobalStyle isDark={mode} />
    </>
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
  cursor: pointer;
`;
