import Link from 'next/link'
import React from 'react'
// Icons
import { GoTriangleRight } from 'react-icons/go'
// styles
import style from '../../styles/components/common/AnimLink.module.css'
// packages
import cn from 'classnames'
import { animated } from '../../Data'

type Props = {
  text: string
  to: string
  max?: string
  className?: string
  animate?: boolean
}

const AnimLink = ({
  text,
  to,
  max = 'auto',
  className,
  animate = true,
  ...props
}: Props): JSX.Element => {
  const classNames = cn(style.link, className)

  return (
    <Link href={to}>
      <small
        {...(animate && { ...animated })}
        style={{ maxWidth: max }}
        className={classNames}
        {...props}
      >
        {text} <GoTriangleRight />
      </small>
    </Link>
  )
}

export default AnimLink
