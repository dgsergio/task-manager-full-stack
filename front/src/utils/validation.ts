export type Validator = {
  hasError: boolean;
  msg: string;
};

export const validation = (
  title: string = '',
  description: string = ''
): Validator => {
  let validator: Validator = {
    hasError: false,
    msg: '',
  };

  if (description.trim().length < 1) {
    validator.msg = 'The description must not be empty';
    validator.hasError = true;
  }

  if (description.trim().length > 100) {
    validator.msg = 'The description is too long';
    validator.hasError = true;
  }

  if (title.length > 25) {
    if (!validator.hasError) validator.msg = 'The title is too long';
    else validator.msg = validator.msg + ' and the title must be shorter';
    validator.hasError = true;
  }

  return validator;
};
