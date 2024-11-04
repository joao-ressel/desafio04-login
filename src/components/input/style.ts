import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 10px;
  color: #9b51e0;
`;

export const InputField = styled.input`
  background: none;
  border: none;
  border: 1px solid #333;
  border-radius: 20px;
  padding: 10px 10px 10px 40px;
  color: #fff;
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