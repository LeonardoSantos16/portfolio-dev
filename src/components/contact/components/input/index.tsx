import { forwardRef, InputHTMLAttributes } from "react";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errors, ...rest }, ref) => {
    return (
      <>
        <S.ContentInput ref={ref} $hasError={!!errors} {...rest} />
        {errors && <S.Errors>{errors}</S.Errors>}
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;