import React from "react";
import { Control, Controller } from "react-hook-form";

import { InputField, InputWrapper } from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  errorMessage?: string;
}

export const Input = ({ placeholder, errorMessage, name, control, ...props }: InputProps) => {
  return (
    <InputWrapper>
      <Controller
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <InputField
            placeholder={placeholder}
            {...props}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
          />
        )}
        control={control}
        name={name}
      />
      {errorMessage ? <p>{errorMessage}</p> : ""}
    </InputWrapper>
  );
};
