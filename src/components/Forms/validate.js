const validate = values => {
  const errors = {}
  if (!values.userId) {
    errors.firstName = '* Please Enter User Id'
  }

  if (!values.valueKg) {
    errors.valueKg = '* Please Enter Value per Kg'
  }

  if (!values.amount) {
    errors.amount = '* Please Enter Principal Amount'
  }

  if (!values.type) {
    errors.type = '* Please Select SELL or BUY'
  }
  return errors
}

export default validate