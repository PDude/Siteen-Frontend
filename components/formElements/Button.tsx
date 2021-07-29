import React from 'react'
import classnames from 'classnames'
import style from '../../styles/components/formElements/Button.module.sass'
import { animated } from '../../Data'

type Props = {
  max?: string
  Icon?: unknown
  className?: string
  children?: React.ReactNode
  onClick?: () => void
  animate?: boolean
}

const Button = ({
  max = 'max-content',
  Icon = null,
  className,
  children = null,
  animate = true,
  ...props
}: Props) => {
  const classNames = classnames(style.btn, className)

  return (
    <button
      {...(animate && { ...animated })}
      style={{ maxWidth: max }}
      className={classNames}
      {...props}
    >
      {children && <span>{children}</span>}
      {Icon && Icon}
    </button>
  )
}

export default Button
