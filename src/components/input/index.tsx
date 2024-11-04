import { InputField, InputWrapper } from "./style";

interface InputProps {
  placeholder: string;
}

export const Input = ({ placeholder, ...props }: InputProps) => {
  return (
    <InputWrapper>
      <InputField placeholder={placeholder} {...props} />
    </InputWrapper>
  );
};
