import React from 'react'
import { animated } from '../../Data'
import style from '../../styles/components/common/InfoCard.module.css'

type InfoCardType = {
  logo: string
  title: string
  text: Array<string>
  textMax?: string
}

const InfoCard = ({ logo, title, text, textMax }: InfoCardType) => (
  <div {...animated} className={style.service_element}>
    <div {...animated} className={`${style.icon_wrap} icon_wrap_global`}>
      <img src={logo} alt='web' />
    </div>
    <h3 {...animated}>{title}</h3>
    <ul>
      {text.map(item => (
        <li {...animated} style={{ maxWidth: textMax }} key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
)

export default InfoCard
