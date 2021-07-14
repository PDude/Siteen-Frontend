import axios from 'axios'
import { Field, Formik } from 'formik'
import { useState } from 'react'
import { GoTriangleRight } from 'react-icons/go'
import { toast } from 'react-toastify'
import style from '../styles/components/FormSection.module.sass'
import Button from './formElements/Button'
import InputField from './formElements/inputField'
import FormModal from './modals/FormModal'

const FormSection = () => {
  // Form success modal
  const [openFormModal, setFormModalOpen] = useState<boolean>(false)

  const onOpenFormModal = () => setFormModalOpen(true)
  const onCloseFormModal = () => setFormModalOpen(false)

  const sendForm = (values, { resetForm }) => {
    const { name, email, phone } = values
    axios
      .post(
        'https://siteen.co/api/v1/consult',
        {
          name,
          email,
          phone
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then((res) => {
        if (res.data.message === 'ok') {
          resetForm({})
          console.log(res)
          onOpenFormModal()
          console.log(values)
        }
      })
      .then(() => {
        setTimeout(() => {
          onCloseFormModal()
        }, 3000)
      })
      .catch(function (error) {
        console.log(error)
        toast.error('Something went wrong please try later')
      })
  }

  return (
    <>
      <Formik
        onSubmit={sendForm}
        initialValues={{ name: '', email: '', phone: '' }}>
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
                <Field
                  name='name'
                  placeholder='Name'
                  type='text'
                  component={InputField}
                  required
                />
                <Field
                  name='email'
                  placeholder='Email'
                  type='email'
                  component={InputField}
                  required
                />
                <Field
                  name='phone'
                  placeholder='Phone Number'
                  type='tel'
                  component={InputField}
                  required
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
