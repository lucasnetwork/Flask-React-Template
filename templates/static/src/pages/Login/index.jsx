import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PageTemplate from "../../Templates/Page";
import Container from "./styles";

function Login() {
  return (
    <PageTemplate>
      <Container>
        <h2>Realizar Login</h2>
        <Input placeholder="Login" />
        <Input placeholder="Senha" />
        <Button>Entrar</Button>
      </Container>
    </PageTemplate>
  );
}

export default Login;
