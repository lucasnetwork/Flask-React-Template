import React from "react";
import { Outlet } from "react-router-dom";
import Container, { Header, Main } from "./styles";
import logo from "../../assets/logo.png";

function PageTemplate({ children, headerContent }) {
  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <Main>
        <div>
          <Outlet />
        </div>
      </Main>
    </Container>
  );
}

export default PageTemplate;
