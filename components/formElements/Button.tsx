import React from 'react'
import cn from 'classnames'
import style from '../../styles/components/formElements/Button.module.sass'
import { animated } from '../../data'
import Wiggle from '../common/Wiggle'

type Props = {
  max?: string
  Icon?: unknown
  className?: string
  children?: React.ReactNode
  onClick?: () => void
  animate?: boolean
  wiggleIcon?: boolean
  wiggleBtn?: boolean
}

const Button = ({
  max = 'max-content',
  Icon = null,
  className,
  children = null,
  animate = true,
  wiggleIcon = false,
  wiggleBtn = false,
  ...props
}: Props) => {
  const classNames = cn(
    style.btn,
    { [style.hasText]: children },
    { [style.iconInly]: !children && Icon },
    className
  )

  if (!Icon && !children) {
    throw new Error(`Must receive one of two variables: 'Icon' or 'children'`)
  }

  return (
    <Wiggle wiggle={wiggleBtn}>
      <button
        {...(animate && { ...animated })}
        style={{ maxWidth: max }}
        className={classNames}
        {...props}
      >
        {children && <span>{children}</span>}
        {Icon && <Wiggle wiggle={wiggleIcon}>{Icon}</Wiggle>}
      </button>
    </Wiggle>
  )
}

export default Button
