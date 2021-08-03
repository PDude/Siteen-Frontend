import React from 'react'
import style from '../../styles/components/modals/ContactModal.module.scss'
import { Formik } from 'formik'
import InputField from '../formElements/inputField'
import Button from '../formElements/Button'
import { GoTriangleRight } from 'react-icons/go'
import { animated } from '../../Data'
import { validate } from '../formElements/validation'
import { toast } from 'react-toastify'
import { fetchFormData } from '../../api'
import ModalView from '../common/ModalView'

type Props = {
  onCloseContactModal: () => void
  onOpenSuccessModal: () => void
  onCloseSuccessModal: () => void
  openContact: boolean
}

type FormValues = {
  name: string
  email: string
  phone: string
}

const ContactModal = ({
  onCloseContactModal,
  onOpenSuccessModal,
  onCloseSuccessModal,
  openContact
}: Props): JSX.Element => {
  // fetching data
  const sendForm = async (values: FormValues, { resetForm }: any) => {
    try {
      return fetchFormData(values).then(res => {
        const { status } = res
        if (status === 200 || status === 201) {
          onCloseContactModal()
          onOpenSuccessModal()
          resetForm({})

          setTimeout(() => {
            onCloseSuccessModal()
          }, 3000)
        }
      })
    } catch (err) {
      console.log(err)
      toast.error('Some Error Occurred, Please Try Later')
      resetForm({})
    }
  }

  return (
    <ModalView dark={true} isOpen={openContact} onClose={onCloseContactModal}>
      <Formik
        onSubmit={sendForm}
        validationSchema={validate}
        initialValues={{ name: '', email: '', phone: '' }}
      >
        {({ handleSubmit }) => (
          <form {...animated} onSubmit={handleSubmit} className={style.form}>
            <h2>Callback by Siteen</h2>
            <div className={style.form_items}>
              <div className={style.fields_wrap}>
                <InputField name='name' placeholder='Name' type='text' />
                <InputField name='email' placeholder='Email' type='email' />
                <InputField
                  name='phone'
                  placeholder='Phone Number'
                  type='tel'
                />
              </div>
              <Button Icon={<GoTriangleRight />}>Submit</Button>
            </div>
          </form>
        )}
      </Formik>
    </ModalView>
  )
}

export default ContactModal
