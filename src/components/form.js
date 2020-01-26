/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { RichText } from "prismic-reactjs"
import * as Yup from "yup"

export function FormFactory(form) {
  const { primary, fields } = form
  const { form_title: title, endpoint, instructions, can_reset } = primary

  const initialValues = getInitialFormState(fields)
  const onSubmit = getFormSubmissionHandler(endpoint)
  const validatonSchmea = buildValidationSchema(fields)

  return (
    <div sx={{ variant: "form.layout.container" }}>
      <div sx={{ variant: "form.layout.header" }}>
        <h2 sx={{ variant: "form.title" }}>{RichText.asText(title)}</h2>
        <p sx={{ variant: "form.instructions" }}>
          {RichText.asText(instructions)}
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validatonSchmea}
      >
        {bag => {
          const { isSubmitting, isValid } = bag
          return (
            <Form>
              <div sx={{ variant: "form.layout.body" }}>
                {fields.map(field => renderFormField(field, bag))}
              </div>
              <div sx={{ variant: "form.layout.footer" }}>
                <div sx={{ variant: "form.control.group" }}>
                  <button
                    type="submit"
                    sx={{ variant: "form.control.submit" }}
                    disabled={isValid}
                  >
                    Submit
                  </button>
                  {can_reset && (
                    <button
                      type="reset"
                      sx={{ variant: "form.control.reset" }}
                      disabled={isSubmitting}
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

function buildValidationSchema(fields) {
  const validationObject = Yup.object().shape(
    fields.reduce((acc, cur) => {
      if (cur === undefined) {
        return {}
      }
      let validator
      const { required, field_type, error_message } = cur
      if (field_type === "email") {
        validator = Yup.string().email(error_message)
      } else if (field_type === "text") {
        validator = Yup.string(error_message)
      } else if (field_type === "select") {
      } else if (field_type === "textarea") {
        const min = 100
        validator = Yup.string().min(
          min,
          `${error_message} (${min} character minimum)`
        )
      }

      if (required && validator !== undefined) {
        validator = validator.required("This field is required...")
      }
      return { ...acc, [cur.field_name]: validator }
    }, {})
  )
  return validationObject
}

function FormLabel({ name, type, label }) {
  const inlineLabels = ["checkbox", "select"]
  const display = inlineLabels.includes(type) ? "inline" : "block"
  return (
    <label htmlFor={name} sx={{ variant: "form.label", display }}>
      {label}
    </label>
  )
}

function TextField({ name, type, required }) {
  return (
    <Field
      id={name}
      name={name}
      type={type}
      required={required}
      sx={{ variant: "form.field.type.text" }}
    />
  )
}

function SelectField({ name, type, required, options }) {
  return (
    <Field
      id={name}
      name={name}
      as={type}
      required={required}
      sx={{ variant: "form.field.type.select.picker" }}
    >
      {options.split(",").map(option => {
        return (
          <option
            value={option}
            sx={{ variant: "form.field.type.select.option" }}
          >
            {option}
          </option>
        )
      })}
    </Field>
  )
}

function CheckboxField({ name, type, required, options }) {
  return (
    <Field
      id={name}
      name={name}
      type={type}
      sx={{ variant: `form.field.type.${type}` }}
    />
  )
}

function TextAreaField({ name, type, required, options }) {
  return (
    <Field
      id={name}
      name={name}
      as={type}
      sx={{ variant: `form.field.type.${type}` }}
      required={required}
    />
  )
}

const FieldStrategy = {
  text: TextField,
  email: TextField,
  select: SelectField,
  checkbox: CheckboxField,
  textarea: TextAreaField,
}

function renderFormField(field, bag) {
  const {
    field_label: label,
    field_name: name,
    field_type: type,
    options,
    required,
  } = field

  const { values, errors, touched, isSubmitting, handleReset, handleBlur } = bag
  const error = errors[name]
  const isTouched = touched[name] === true

  return (
    <div
      sx={{
        variant: "form.field.container",
        flexDirection: type === "checkbox" ? "row" : "column",
        justifyContent: type === "checkbox" ? "flex-start" : "center",
      }}
    >
      {label && <FormLabel name={name} label={label} type={type} />}
      {FieldStrategy[type]({ name, type, options, required, bag })}
      <div sx={{ variant: "form.field.error.container" }}>
        {error && isTouched && (
          <ErrorMessage
            name={name}
            sx={{ variant: "form.field.error.message" }}
          />
        )}
      </div>
    </div>
  )
}

function getInitialFormState(fields) {
  return fields.reduce((acc, cur) => {
    let val = ""
    if (cur.field_type === "checkbox") {
      val = true
    }
    return { ...acc, [cur.field_name]: val }
  }, {})
}

function getFormSubmissionHandler(endpoint) {
  return function(values) {
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
  }
}
