import React from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import style from '../../styles/components/modals/PromotionModal.module.sass'

type Props = {
  onClosePromotionModal: () => void
  openPromotion: boolean
}

const PromotionModal = ({
  onClosePromotionModal,
  openPromotion
}: Props): JSX.Element => {
  return (
    <Modal
      classNames={{
        overlay: `${style.overlay}`,
        modal: `${style.modal_wiew}`
      }}
      open={openPromotion}
      onClose={onClosePromotionModal}
      center
    >
      <iframe
        width='100%'
        height='100%'
        src='https://www.youtube.com/embed/p39p7BxiVtw'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen={true}
      ></iframe>
    </Modal>
  )
}

export default PromotionModal
