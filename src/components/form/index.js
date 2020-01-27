/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Formik, Form } from "formik"
import { navigate } from "gatsby"
import { RichText } from "prismic-reactjs"
import { getFormField } from "./fields"
import { getInitialValues, getSubmissionHandler } from "./helpers"
import { getValidationSchema } from "./validation"

export function FormFactory(form) {
  const { primary, fields } = form
  const { form_title: title, endpoint, instructions, can_reset } = primary
  const [factoryProps] = React.useState({
    initialValues: getInitialValues(fields),
    onSubmit: getSubmissionHandler(endpoint, onSuccess),
    validationSchmea: getValidationSchema(fields),
    can_reset,
  })

  return (
    <div sx={{ variant: "form.layout.container" }}>
      <FormHeader title={title} instructions={instructions} />
      <FormBody {...factoryProps} fields={fields} />
    </div>
  )
}

function FormHeader({ title, instructions }) {
  return (
    <div sx={{ variant: "form.layout.header" }}>
      <h2 sx={{ variant: "form.title" }}>{RichText.asText(title)}</h2>
      <p sx={{ variant: "form.instructions" }}>
        {RichText.asText(instructions)}
      </p>
    </div>
  )
}

function FormBody({
  initialValues,
  onSubmit,
  validationSchmea,
  can_reset,
  fields,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchmea}
      isInitialValid={false}
    >
      {bag => {
        const { isSubmitting, isValid } = bag
        return (
          <Form>
            <div sx={{ variant: "form.layout.body" }}>
              {fields.map(field => getFormField(field, bag))}
            </div>
            <FormFooter
              isSubmitting={isSubmitting}
              isValid={isValid}
              can_reset={can_reset}
            />
          </Form>
        )
      }}
    </Formik>
  )
}

function FormFooter({ isValid, isSubmitting, can_reset }) {
  return (
    <div sx={{ variant: "form.layout.footer" }}>
      <div sx={{ variant: "form.control.group" }}>
        <button
          type="submit"
          sx={{ variant: "form.control.submit" }}
          disabled={!isValid}
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
  )
}

async function onSuccess(m) {
  await window.alert(
    "Woo! Your submission has been successful! I'll be in touch! Navigating you back home now..."
  )
  navigate("/")
}
