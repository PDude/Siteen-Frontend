import React from 'react'
import style from '../../styles/components/common/Pulse.module.sass'

type Props = {
  children: React.ReactNode
}

const Pulse = ({ children }: Props): JSX.Element => {
  return <div className={style.pulse}>{children}</div>
}

export default Pulse
