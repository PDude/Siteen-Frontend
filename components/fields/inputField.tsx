import { FieldProps } from 'formik';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputField = ({ field, form: _, ...props }: FieldProps & InputProps) => {
  return <input {...field} {...props} />;
};

export default InputField;
