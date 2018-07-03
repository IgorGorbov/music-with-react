import validator from 'validator';
import {
  MIN_LENGTH_PASSWORD,
  MIN_LENGTH_USERNAME,
} from '../constants/Validate';

class FormValidator {
  constructor(validations) {
    this.validations = validations;
  }

  validate(state) {
    let validation = this.valid();
    this.validations.forEach(rule => {
      if (!validation[rule.field].isInvalid) {
        const field_value = state[rule.field].toString();
        const args = rule.args || [];
        const validation_method =
          typeof rule.method === 'string'
            ? validator[rule.method]
            : rule.method;
        if (validation_method(field_value, ...args, state) !== rule.validWhen) {
          validation.error = {
            ...validation.error,
            [rule.field]: rule.message,
          };
          validation.isValid = false;
        }
      }
    });

    return validation;
  }

  valid() {
    const validation = {};

    this.validations.map(
      rule => (validation[rule.field] = { isInvalid: false, message: '' }),
    );

    return { error: {}, isValid: true, ...validation };
  }
}

export default FormValidator;

export const passwordMatch = (confirmation, state) =>
  state.password === confirmation;

export const verificationLength = (field, length) => field.length >= length;

export const verificationLessLength = (field, length) => field.length < length;

export const validatingFieldsForLoginForm = [
  {
    field: 'email',
    method: 'isEmpty',
    validWhen: false,
    message: 'Email is required',
  },
  {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
    message: 'That is not a valid email',
  },
  {
    field: 'password',
    method: 'isEmpty',
    validWhen: false,
    message: 'Password is required',
  },
  {
    field: 'password',
    method: verificationLength,
    args: [MIN_LENGTH_PASSWORD],
    validWhen: true,
    message: 'Password is too short (minimum is 6 characters)',
  },
];

export const validatingFieldsForRegistrationForm = [
  {
    field: 'name',
    method: 'isEmpty',
    validWhen: false,
    message: 'Name is required',
  },
  {
    field: 'name',
    method: verificationLessLength,
    args: [MIN_LENGTH_USERNAME],
    validWhen: false,
    message: 'Name is too short (minimum is 3 characters)',
  },
  {
    field: 'email',
    method: 'isEmpty',
    validWhen: false,
    message: 'Email is required',
  },
  {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
    message: 'That is not a valid email',
  },
  {
    field: 'password',
    method: 'isEmpty',
    validWhen: false,
    message: 'Password is required',
  },
  {
    field: 'password',
    method: verificationLength,
    args: [MIN_LENGTH_PASSWORD],
    validWhen: true,
    message: 'Password is too short (minimum is 6 characters)',
  },
  {
    field: 'passwordConfirmation',
    method: 'isEmpty',
    validWhen: false,
    message: 'Password confirmation is required.',
  },
  {
    field: 'passwordConfirmation',
    method: passwordMatch,
    validWhen: true,
    message: 'Password and password confirmation do not match.',
  },
];
