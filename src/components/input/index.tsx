import React from "react";
import { InputField, InputWrapper } from "./style";
import { Control, Controller } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

export const Input = ({ placeholder, name, control, ...props }: InputProps) => {
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
      ></Controller>
    </InputWrapper>
  );
};
