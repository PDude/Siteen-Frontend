import React, { useState } from 'react'
import style from '../styles/components/ContactFloatCta.module.scss'
import Pulse from './common/Pulse'
import Button from './formElements/Button'

import { FaPhoneAlt } from 'react-icons/fa'
import Wiggle from './common/Wiggle'
import ContactModal from './modals/ContactModal'
import SuccessModal from './modals/SuccessModal'

const ContactFloatCta = () => {
  // Contact Modal
  const [openContact, setContactOpen] = useState<boolean>(false)

  const onOpenContactModal = () => setContactOpen(true)
  const onCloseContactModal = () => setContactOpen(false)

  // success modal
  const [openSuccessModal, setSuccessModalOpen] = useState<boolean>(false)

  const onOpenSuccessModal = () => setSuccessModalOpen(true)
  const onCloseSuccessModal = () => setSuccessModalOpen(false)

  return (
    <>
      <div className={style.btn_wrap}>
        <Wiggle wiggle={!openContact}>
          <Pulse>
            <Button onClick={onOpenContactModal} Icon={<FaPhoneAlt />} />
          </Pulse>
        </Wiggle>
      </div>
      <ContactModal
        openContact={openContact}
        onCloseSuccessModal={onCloseSuccessModal}
        onOpenSuccessModal={onOpenSuccessModal}
        onCloseContactModal={onCloseContactModal}
      />
      <SuccessModal
        onCloseSuccessModal={onCloseSuccessModal}
        openSuccessModal={openSuccessModal}
      />
    </>
  )
}

export default ContactFloatCta
