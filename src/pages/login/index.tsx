import { useForm } from "react-hook-form";
import Button from "../../components/button";
import { Input } from "../../components/input";
import { Container, LoginContainer } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().min(6, "No minimo 6 caracteres").required("Campo obrigatório"),
  })
  .required();

export const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  // const form = watch();

  console.log(errors);
  return (
    <Container>
      <LoginContainer>
        <h1>Login</h1>
        <Input
          errorMessage={errors.email?.message}
          name="email"
          placeholder="Email"
          control={control}
        />
        <Input
          errorMessage={errors.password?.message}
          name="password"
          placeholder="Senha"
          control={control}
          type="password"
        />
        <Button>Entrar</Button>
      </LoginContainer>
    </Container>
  );
};
