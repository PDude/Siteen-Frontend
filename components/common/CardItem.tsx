import React from 'react'
import style from '../../styles/components/common/CardItem.module.css'

type CardItemType = {
  logo: string
  title: string
  text: Array<string>
  textMax?: string
}

const CardItem = ({ logo, title, text, textMax }: CardItemType) => (
  <div className={style.service_element}>
    <div className={`${style.icon_wrap} icon_wrap_global`}>
      <img src={logo} alt='web' />
    </div>
    <h3>{title}</h3>
    <ul>
      {text.map(item => (
        <li style={{ maxWidth: textMax }} key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
)

export default CardItem
