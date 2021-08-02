import React from 'react'
import style from '../../styles/components/common/Wiggle.module.scss'
import cn from 'classnames'

type Props = {
  children: any
  wiggle?: boolean
}

const Wiggle = ({ children, wiggle = true }: Props): JSX.Element => {
  return <div className={cn({ [style.wiggle]: wiggle })}>{children}</div>
}

export default Wiggle
