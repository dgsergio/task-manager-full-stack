import { Validator } from '../models/types';

export const signinValidation = (
  email: string = '',
  password: string = ''
): Validator => {
  let validator: Validator = {
    hasError: false,
    msg: '',
  };
  const emailFormat = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (email.trim().length < 1 || password.trim().length < 1) {
    validator.msg = 'No fields must be empty';
    validator.hasError = true;
  } else if (!emailFormat) {
    validator.msg = 'Invalid email format';
    validator.hasError = true;
  }

  return validator;
};

export const signupValidation = (
  email: string = '',
  password: string = '',
  repeatPassword: string,
  name: string
): Validator => {
  let validator: Validator = {
    hasError: false,
    msg: '',
  };
  const emailFormat = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (
    email.trim().length < 1 ||
    password.trim().length < 1 ||
    repeatPassword.trim().length < 1 ||
    name.trim().length < 1
  ) {
    validator.msg = 'No fields must be empty';
    validator.hasError = true;
  } else if (name.length > 50) {
    validator.msg = 'The name is too long';
    validator.hasError = true;
  } else if (!emailFormat) {
    validator.msg = 'Invalid email format';
    validator.hasError = true;
  } else if (repeatPassword !== password) {
    validator.msg = 'Passwords does not match';
    validator.hasError = true;
  } else if (password.trim().length < 6) {
    validator.msg =
      'The password must be at least 6 characters. Spaces are not allowed';
    validator.hasError = true;
  }

  return validator;
};
