import React from 'react'
import style from '../../styles/components/common/Title.module.sass'
import cn from 'classnames'

type Props = {
  label?: string
  title?: string
  className?: string
  gap?: boolean
  margin?: boolean
  max?: string
}

const Title = ({
  className,
  label,
  title,
  gap = false,
  max = 'auto',
  margin = false
}: Props): JSX.Element => {
  const classNames = cn(
    style.title_wrap,
    { [style.gap]: gap },
    { [style.margin]: margin },
    className
  )

  return (
    <div style={{ maxWidth: max }} className={classNames}>
      {label && <small className={style.title_label}>{label}</small>}
      {title && <h2 className={style.title}>{title}</h2>}
    </div>
  )
}

export default Title
