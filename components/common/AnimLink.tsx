import Link from 'next/link'
import React from 'react'
// Icons
import { GoTriangleRight } from 'react-icons/go'
// styles
import style from '../../styles/components/common/AnimLink.module.css'

type Props = {
  text: string
  to: string
}

const AnimLink = ({ text, to }: Props): JSX.Element => (
  <Link href={to}>
    {/* <a className={style.link}> */}
    <small className={style.link}>
      {text} <GoTriangleRight />
    </small>
    {/* </a> */}
  </Link>
)

export default AnimLink
