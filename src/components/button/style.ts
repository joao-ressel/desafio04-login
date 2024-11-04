import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  position: relative;
  z-index: 1;

  font-size: 1.2rem;
  color: #fff;
  border: none;
  border-radius: 50px;
  background-color: #1e192c;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:disabled {
    background-color: #7f7f84;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
