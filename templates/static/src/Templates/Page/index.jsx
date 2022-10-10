import React from "react";
import { Outlet } from "react-router-dom";
import Container, { Header, Main } from "./styles";

function PageTemplate({ children, headerContent }) {
  return (
    <Container>
      <Header>{headerContent}</Header>
      <Main>
        <div>
          <Outlet />
        </div>
      </Main>
    </Container>
  );
}

export default PageTemplate;
