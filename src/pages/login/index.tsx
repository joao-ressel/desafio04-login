import Button from "../../components/button";
import { Input } from "../../components/input";
import { Container, LoginContainer } from "./style";

export const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <h1>Login</h1>
        <Input placeholder="Usuario" />
        <Input placeholder="Senha"/>
        <Button>Entrar</Button>
      </LoginContainer>
    </Container>
  );
};
