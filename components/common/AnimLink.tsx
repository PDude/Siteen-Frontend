import Link from 'next/link'
import React from 'react'
// Icons
import { GoTriangleRight } from 'react-icons/go'
// styles
import style from '../../styles/components/common/AnimLink.module.css'
// packages
import cn from 'classnames'
import { animated } from '../../data'

type Props = {
  text: string
  to: string
  max?: string
  className?: string
  animate?: boolean
  newTab?: boolean
  isLink?: boolean
}

const AnimLink = ({
  text,
  to,
  max = 'auto',
  className,
  animate = true,
  newTab = false,
  isLink = true,
  ...props
}: Props): JSX.Element => {
  const classNames = cn(style.link, className)
  const body = (
    <small
      {...(animate && { ...animated })}
      style={{ maxWidth: max }}
      className={classNames}
      {...props}
    >
      {text} <GoTriangleRight />
    </small>
  )

  return (
    <>
      {isLink ? (
        <Link href={to}>
          <a rel='noreferrer' target={newTab ? '_blank' : '_self'}>
            {body}
          </a>
        </Link>
      ) : (
        <>{body}</>
      )}
    </>
  )
}

export default AnimLink
