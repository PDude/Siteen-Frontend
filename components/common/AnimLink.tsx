import Link from 'next/link'
import React from 'react'
// Icons
import { GoTriangleRight } from 'react-icons/go'
// styles
import style from '../../styles/components/common/AnimLink.module.css'
// packages
import cn from 'classnames'

type Props = {
  text: string
  to: string
  max?: string
  className?: string
}

const AnimLink = ({
  text,
  to,
  max = 'auto',
  className,
  ...props
}: Props): JSX.Element => {
  const classNames = cn(style.link, className)

  return (
    <Link href={to}>
      <small style={{ maxWidth: max }} className={classNames} {...props}>
        {text} <GoTriangleRight />
      </small>
    </Link>
  )
}

export default AnimLink
