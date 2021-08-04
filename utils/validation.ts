import * as Yup from 'yup'

const phoneRegExp = /^[0-9 ()+-]+$/

export const validate = Yup.object({
  name: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .required('Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'Must be 10 characters or more')
    .max(13, 'Must be 13 characters or less')
    .required('Phone number is required')
})
