import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1.5rem;
  margin-bottom: 20px;
  gap: 1rem;

  p {
    color: red;
  }
`;

export const InputField = styled.input`
  background: none;
  border: none;
  border: 1px solid #333;
  border-radius: 20px;
  padding: 10px 10px 10px 40px;
  font-size: 1rem;
  outline: none;
  width: 100%;

  &:focus {
    border-bottom: 1px solid #9b51e0;
  }

  &::placeholder {
    color: #ccc;
  }
`;
