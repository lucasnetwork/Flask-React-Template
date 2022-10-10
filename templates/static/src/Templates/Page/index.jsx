import React from "react";
import Container, { Header, Main } from "./styles";

function PageTemplate({ children, headerContent }) {
  return (
    <Container>
      <Header>{headerContent}</Header>
      <Main>
        <div>{children}</div>
      </Main>
    </Container>
  );
}

export default PageTemplate;
