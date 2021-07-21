import React from 'react'
import { Formik } from 'formik'
import { useState } from 'react'
import { GoTriangleRight } from 'react-icons/go'
import { toast } from 'react-toastify'
import style from '../styles/components/FormSection.module.sass'
import Button from './formElements/Button'
import InputField from './formElements/inputField'
import FormModal from './modals/FormModal'
import * as Yup from 'yup'

type FormValues = {
  name: string
  email: string
  phone: string
}

const FormSection = (): JSX.Element => {
  const phoneRegExp = /^[0-9 ()+-]+$/

  const validate = Yup.object({
    name: Yup.string()
      .min(2, 'Must be 2 characters or more')
      .required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is required')
  })

  // Form success modal
  const [openFormModal, setFormModalOpen] = useState<boolean>(false)

  const onOpenFormModal = () => setFormModalOpen(true)
  const onCloseFormModal = () => setFormModalOpen(false)

  const sendForm = async (values: FormValues, { resetForm }: any) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify(values)
    const method = 'POST'

    try {
      const res = await fetch(`${process.env.NEXT_API_URL}consult`, {
        method,
        body,
        headers
      })

      const { status } = res

      if (status === 200 || status === 201) {
        resetForm({})
        onOpenFormModal()

        setTimeout(() => {
          onCloseFormModal()
        }, 3000)
      }
    } catch (err) {
      const msg = err.res.message
      console.log(msg)
      toast.error(msg)
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
          <form onSubmit={handleSubmit} className={style.form}>
            <span className='title_label'>LET’S GET STARTED</span>
            <h2 className={style.h2}>Get A Free Consultation.</h2>
            <p>
              The best ideas start from the brif. Let us to know what you need
              and we will realise it in sucsessfull product.
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
      <FormModal
        onCloseFormModal={onCloseFormModal}
        openFormModal={openFormModal}
      />
    </>
  )
}

export default FormSection
