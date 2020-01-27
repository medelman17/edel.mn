/** @jsx jsx */
import { jsx } from "theme-ui"
import { Field, ErrorMessage } from "formik"

const FormFieldStrategy = {
  text: TextField,
  email: TextField,
  select: SelectField,
  checkbox: CheckboxField,
  textarea: TextAreaField,
}

export function getFormField(field, bag) {
  const {
    field_label: label,
    field_name: name,
    field_type: type,
    options,
    required,
  } = field
  const { errors, touched } = bag
  const error = errors[name]
  const isTouched = touched[name] === true
  const strategies = Object.keys(FormFieldStrategy)
  if (strategies.includes(type)) {
    return FormFieldStrategy[type]({
      label,
      name,
      type,
      options,
      required,
      error,
      isTouched,
    })
  }
}

function FormLabel({ name, label, display = "block", variant = "form.label" }) {
  return (
    <label htmlFor={name} sx={{ variant, display }}>
      {label}
    </label>
  )
}

function FormField({ type, isTouched, ...props }) {
  return (
    <Field sx={{ variant: `form.field.type.${type}` }} type={type} {...props} />
  )
}

function FormFieldError({ error, isTouched, name }) {
  return (
    <div sx={{ variant: "form.field.error.container" }}>
      {error && isTouched && (
        <ErrorMessage
          name={name}
          sx={{ variant: "form.field.error.message" }}
        />
      )}
    </div>
  )
}

function SelectOption({ option }) {
  return (
    <option value={option} sx={{ variant: "form.field.type.select.option" }}>
      {option}
    </option>
  )
}

function SelectField(props) {
  return (
    <div
      key={props.name}
      sx={{
        variant: "form.field.container",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <FormLabel {...props} />
      <FormField as="select" {...props}>
        {props.options.split(",").map(opt => (
          <SelectOption key={opt} option={opt} />
        ))}
        )}
      </FormField>
      <FormFieldError {...props} />
    </div>
  )
}

function TextField(props) {
  return (
    <div sx={{ variant: "form.field.container" }} key={props.name}>
      <FormLabel {...props} />
      <FormField {...props} />
      <FormFieldError {...props} />
    </div>
  )
}

function TextAreaField(props) {
  return (
    <div sx={{ variant: "form.field.container" }} key={props.name}>
      <FormLabel {...props} />
      <FormField as="textarea" {...props} />
      <FormFieldError {...props} />
    </div>
  )
}

function CheckboxField(props) {
  return (
    <div
      sx={{
        variant: "form.field.container",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
      key={props.name}
    >
      <FormLabel {...props} display="inline" />
      <FormField {...props} />
      <FormFieldError {...props} />
    </div>
  )
}
