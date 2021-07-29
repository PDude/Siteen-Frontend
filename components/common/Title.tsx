import React from 'react'
import style from '../../styles/components/common/Title.module.sass'
import cn from 'classnames'
import { animated } from '../../Data'

type Props = {
  label?: string
  title?: string
  className?: string
  gap?: boolean
  margin?: boolean
  max?: string
  animate?: boolean
}

const Title = ({
  className,
  label,
  title,
  gap = false,
  max = 'auto',
  margin = false,
  animate = true,
  ...props
}: Props): JSX.Element => {
  const classNames = cn(
    style.title_wrap,
    { [style.gap]: gap },
    { [style.margin]: margin },
    className
  )

  return (
    <div style={{ maxWidth: max }} className={classNames} {...props}>
      {label && (
        <small {...(animate && { ...animated })} className={style.title_label}>
          {label}
        </small>
      )}
      {title && (
        <h2 {...(animate && { ...animated })} className={style.title}>
          {title}
        </h2>
      )}
    </div>
  )
}

export default Title
