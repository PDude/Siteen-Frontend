import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import style from '../../styles/FormModal.module.sass'
import checkModal from '../../images/check_modal_form.svg'

const FormModal = ({ onCloseFormModal, openFormModal }) => {
  return (
    <Modal
      classNames={{
        overlay: `${style.overlay}`,
        modal: `${style.modal_wiew}`
      }}
      open={openFormModal}
      onClose={onCloseFormModal}
      center>
      <div className={style.modal_form_content}>
        <img src={checkModal} alt='checkModal' />
        <h3>Request completed</h3>
        <p>
          We will contact you as soon as possible and provide a detailed
          consultation
        </p>
      </div>
    </Modal>
  )
}

export default FormModal
