import * as Yup from "yup"

export function getValidationSchema(fields) {
  return Yup.object().shape(fields.reduce(fieldValidationReducer, {}))
}

const fieldValidationStrategy = {
  email: ({ msg }) => Yup.string().email(msg),
  text: ({ msg }) => Yup.string(msg),
  select: ({ msg }) => {},
  textarea: ({ msg, min = 0 }) => Yup.string().min(min, msg),
}

function fieldValidationReducer(
  acc,
  { required, field_name: name, field_type: type, error_message: msg }
) {
  let validator
  const strategies = Object.keys(fieldValidationStrategy)
  if (strategies.includes(type)) {
    validator = fieldValidationStrategy[type]({ msg })
    if (required) {
      validator = validator.required("This field is required...")
    }
  }
  return { ...acc, [name]: validator }
}
