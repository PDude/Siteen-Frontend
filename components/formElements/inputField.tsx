import cn from 'classnames'
import style from '../../styles/components/formElements/Input.module.sass'
import React from 'react'
import { useField } from 'formik'
import { animated } from '../../Data'

type Props = {
  [x: string]: any
  name: string
  className?: string
}

const InputField = ({ className, ...props }: Props) => {
  const [field, meta] = useField(props)
  const hasError = meta.touched && meta.error && 'is-invalid'
  const classNames = cn(style.input, { [style.error]: hasError }, className)

  return (
    <div {...animated} className={style.input_wrap}>
      <input className={classNames} {...field} {...props} autoComplete='off' />
      {hasError && <p className={style.text_error}>{meta.error}</p>}
    </div>
  )
}
export default InputField
