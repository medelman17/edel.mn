export function getInitialValues(fields = []) {
  return fields.reduce((acc, { field_type, field_name }) => {
    const val = field_type === "checkbox" ? true : ""
    return { ...acc, [field_name]: val }
  })
}

export function getSubmissionHandler(endpoint, onSuccess, onFailure) {
  return function(values) {
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(r => onSuccess(r))
      .catch(e => {
        window.alert(`Uh oh, something went wrong... please try again later`)
      })
  }
}
