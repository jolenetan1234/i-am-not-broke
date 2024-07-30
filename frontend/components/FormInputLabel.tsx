import React from 'react';
import { FormInputLabelProps } from '@/types/FormInputLabelProps';

const FormInputLabel = ({ htmlFor, text, required=false }: FormInputLabelProps) => {
  return (
    <div className="FormInputLabel">
        <label
        htmlFor={htmlFor}
        className="input-label-style">
          <span>{text}</span>
          {required ? <span className="text-red-500">*</span> : ""}
        </label>
    </div>
  );
};

export default FormInputLabel;