import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputForm } from './styles';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const {fieldName, registerField} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <InputForm ref={inputRef} {...rest} />
  );
}