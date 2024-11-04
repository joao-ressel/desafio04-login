import { StyledButton } from "./style";

interface ButtonProps {
  children: React.ReactNode; 
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
