export function validateField(field) {
  const fieldName = field.name;
  const fieldValue = field.value;

  let validation;
  switch (fieldName) {
    case "email":
      validation = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      field.valid = validation ? true : false;
      break;
    case "name":
      validation = fieldValue.match(/^.{1,35}$/i);
      field.valid = validation ? true : false;
      break;
    case "subject":
      validation = fieldValue.match(/^.{0,35}$/i);
      field.valid = validation ? true : false;
      break;
    case "message":
      validation = fieldValue.match(/^.{1,500}/i);
      field.valid = validation ? true : false;
      break;
    default:
      field.valid = true;
  }

  return field;
}

export function validateFields(fields) {
  return fields.map(field => {
    return validateField(field);
  });
}
