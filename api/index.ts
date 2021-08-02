type FormValues = {
  name: string
  email: string
  phone: string
}

export const fetchFormData = async (values: FormValues) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  const body = JSON.stringify(values)
  const method = 'POST'

  const res = await fetch(`${process.env.NEXT_API_URL}consult`, {
    method,
    body,
    headers
  })

  return res
}
