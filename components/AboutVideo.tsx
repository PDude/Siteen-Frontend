import React from 'react'
import style from '../styles/components/AboutVideo.module.sass'
import Pulse from '../components/common/Pulse'
import { ImPlay3 } from 'react-icons/im'
import { useState } from 'react'
import PromotionModal from './modals/PromotionModal'
import Button from './formElements/Button'

type Props = {
  videoLabel: string
}

const AboutVideo = ({ videoLabel }: Props): JSX.Element => {
  // Promotion modal
  const [openPromotion, setPromotionOpen] = useState<boolean>(false)

  const onOpenPromotionModal = () => setPromotionOpen(true)
  const onClosePromotionModal = () => setPromotionOpen(false)

  return (
    <>
      <div className={style.about_us_video}>
        <Pulse>
          <Button
            Icon={<ImPlay3 />}
            max='100%'
            onClick={onOpenPromotionModal}
          />
        </Pulse>
        <div className={style.about_us_text}>
          <span>{videoLabel}</span>
          <p>Promotion video</p>
        </div>
      </div>
      <PromotionModal
        onClosePromotionModal={onClosePromotionModal}
        openPromotion={openPromotion}
      />
    </>
  )
}

export default AboutVideo
