import React from 'react'
import classnames from 'classnames'
import style from '../../styles/components/formElements/Button.module.sass'

type Props = {
  max?: string
  Icon?: unknown
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({
  max = 'max-content',
  Icon = null,
  className,
  children = null,
  ...props
}: Props) => {
  const classNames = classnames(style.btn, className)

  return (
    <button style={{ maxWidth: max }} className={classNames} {...props}>
      {children && <span>{children}</span>}
      {Icon && Icon}
    </button>
  )
}

export default Button
