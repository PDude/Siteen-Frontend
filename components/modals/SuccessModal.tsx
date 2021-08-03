import React from 'react'
import { BsCheck } from 'react-icons/bs'
import style from '../../styles/components/modals/SuccessModal.module.scss'
import ModalView from '../common/ModalView'

type Props = {
  onCloseSuccessModal: () => void
  openSuccessModal: boolean
}

const SuccessModal = ({
  onCloseSuccessModal,
  openSuccessModal
}: Props): JSX.Element => (
  <ModalView isOpen={openSuccessModal} onClose={onCloseSuccessModal}>
    <div className={style.modal_form_content}>
      <BsCheck />
      <h3>Request completed</h3>
      <p>
        We will contact you as soon as possible and provide a detailed
        consultation
      </p>
    </div>
  </ModalView>
)

export default SuccessModal
