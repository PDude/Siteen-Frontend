import React from 'react'
// styles
import style from '../../styles/components/common/AnimArrow.module.scss'
// images
import projecCheckDown from '../../images/project_check_down.svg'
import projecCheckDownSmall from '../../images/project_check_down_small.svg'
// packages
import cn from 'classnames'

type Props = {
  className?: string
}

const AnimArrow = ({ className }: Props) => {
  const classNames = cn(style.arrow, className)

  return (
    <div className={classNames}>
      <img
        className={style.for_big_device}
        src={projecCheckDown}
        alt='projecCheckDown'
      />
      <img
        className={style.for_small_device}
        src={projecCheckDownSmall}
        alt='projecCheckDown'
      />
    </div>
  )
}

export default AnimArrow
