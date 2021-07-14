import { FieldProps } from 'formik';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import classnames from 'classnames';
import style from '../../styles/components/formElements/Input.module.sass';
type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputField = ({ field, className, form: _, ...props }: FieldProps & InputProps) => {
  const classNames = classnames(style.input, className);

  return <input {...field} className={classNames} {...props} />;
};

export default InputField;
