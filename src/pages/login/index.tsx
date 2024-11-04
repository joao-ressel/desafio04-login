import { useForm } from "react-hook-form";
import Button from "../../components/button";
import { Input } from "../../components/input";
import { Container, LoginContainer } from "./style";

export const Login = () => {
  const {
    watch,
    control,
    formState: { errors, isValid },
  } = useForm();

  const form = watch();

  console.log(form);
  return (
    <Container>
      <LoginContainer>
        <h1>Login</h1>
        <Input name="email" placeholder="Email" control={control} />
        <Input name="password" placeholder="Senha" control={control} />
        <Button>Entrar</Button>
      </LoginContainer>
    </Container>
  );
};
