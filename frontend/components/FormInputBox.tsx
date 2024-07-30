import React from 'react';
import { FormInputBoxProps } from '@/types/FormInputBoxProps';

const FormInputBox = ({ type, id, name, placeholder, value, required=false, onChange }: FormInputBoxProps) => {
  return (
    <div className="FormInputBox">
        <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        {...(required? {required} : {})}
        onChange={onChange}
        className="input-style"
        />
    </div>
  );
};

export default FormInputBox;