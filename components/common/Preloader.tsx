import React from 'react'
import style from '../../styles/components/common/Preloader.module.css'

const Preloader = (): JSX.Element => (
  <div className={style.bg}>
    <div className={style.body}>
      <span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div className={style.base}>
        <span></span>
        <div className={style.face}></div>
      </div>
    </div>
    <div className={style.longfazers}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <h1 className={style.title}>Loading ..</h1>
  </div>
)

export default Preloader
