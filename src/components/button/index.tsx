import { StyledButton } from "./style";

interface ButtonProps {
  children: React.ReactNode;
  isValid: boolean;
}

export const Button = ({ children, isValid, ...props }: ButtonProps) => {
  return (
    <StyledButton disabled={!isValid} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
