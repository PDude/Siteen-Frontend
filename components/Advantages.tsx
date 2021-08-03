import React from 'react'
// data
import { advantages } from '../data'
// styles
import style from '../styles/components/common/Advantages.module.scss'
// components
import InfoCard from './common/InfoCard'
import Title from './common/Title'
// packages
import ServicesSlider from 'react-slick'

const Advantages = () => {
  const sliderSettings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    infinite: false,
    centerMode: true,
    centerPadding: '30px'
  }

  const advantagesItems = advantages.map(a => (
    <InfoCard
      key={a.advTitle}
      title={a.advTitle}
      text={a.advtext}
      logo={a.advLogo}
      textMax='240px'
    />
  ))

  return (
    <div className={style.advantages_wrap}>
      <div className='container'>
        <Title
          title='Benefits of working with us.'
          label='advantages'
          gap={true}
          max='430px'
        />
        <div className={style.advantages_items}>{advantagesItems}</div>
        <div className={style.slider_wrap}>
          <ServicesSlider {...sliderSettings}>{advantagesItems}</ServicesSlider>
        </div>
      </div>
    </div>
  )
}

export default Advantages
