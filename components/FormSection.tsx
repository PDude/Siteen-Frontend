import React from 'react'
import { Formik } from 'formik'
import { useState } from 'react'
import { GoTriangleRight } from 'react-icons/go'
import { toast } from 'react-toastify'
import style from '../styles/components/FormSection.module.sass'
import Button from './formElements/Button'
import InputField from './formElements/inputField'
import SuccessModal from './modals/SuccessModal'
import Title from './common/Title'
import { animated } from '../Data'
import { fetchFormData } from '../api'
import { validate } from './formElements/validation'

type FormValues = {
  name: string
  email: string
  phone: string
}

const FormSection = (): JSX.Element => {
  // success modal
  const [openSuccessModal, setSuccessModalOpen] = useState<boolean>(false)

  const onOpenSuccessModal = () => setSuccessModalOpen(true)
  const onCloseSuccessModal = () => setSuccessModalOpen(false)

  const sendForm = async (values: FormValues, { resetForm }: any) => {
    try {
      return fetchFormData(values).then(res => {
        const { status } = res
        if (status === 200 || status === 201) {
          resetForm({})
          onOpenSuccessModal()

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
    <>
      <Formik
        onSubmit={sendForm}
        validationSchema={validate}
        initialValues={{ name: '', email: '', phone: '' }}
      >
        {({ handleSubmit }) => (
          <form {...animated} onSubmit={handleSubmit} className={style.form}>
            <Title
              className={style.heading}
              label='LET’S GET STARTED'
              margin={true}
              title='Get A Free Consultation.'
            />
            <p {...animated}>
              The best ideas start from the brif. Let us to know what you need
              and we will realise it in successful product.
            </p>
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
      <SuccessModal
        onCloseSuccessModal={onCloseSuccessModal}
        openSuccessModal={openSuccessModal}
      />
    </>
  )
}

export default FormSection
