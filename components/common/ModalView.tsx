import React from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import style from '../../styles/components/common/ModalView.module.scss'
import cn from 'classnames'
import { IoCloseOutline } from 'react-icons/io5'

type Props = {
  children: any
  isOpen: boolean
  onClose: () => void
  className?: string
  dark?: boolean
}

const closeIcon = (
  <div className={style.icon}>
    <IoCloseOutline />
  </div>
)

const ModalView = ({
  className,
  dark = false,
  children,
  isOpen,
  onClose
}: Props): JSX.Element => {
  const modalClassNames = cn(
    style.modal_wiew,
    { [style.light]: !dark },
    { [style.dark]: dark },
    className
  )

  return (
    <Modal
      classNames={{
        overlay: `${style.overlay}`,
        modal: modalClassNames
      }}
      open={isOpen}
      onClose={onClose}
      center
      closeIcon={closeIcon}
    >
      {children}
    </Modal>
  )
}

export default ModalView
