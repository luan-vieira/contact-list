import React from "react";
import * as C from "./styles";
import { forwardRef } from "react";

const Input = forwardRef(({ id, label, error, children, ...rest }, ref) => {
  return (
    <C.Container>
      <C.Label htmlFor={id}>
        {label} {error ? <span>{error}</span> : null}
      </C.Label>
      <C.Input id={id} ref={ref} {...rest} />
    </C.Container>
  );
});
export default Input;
