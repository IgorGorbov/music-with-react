export const MIN_LENGTH_PASSWORD = 6;
export const MIN_LENGTH_USERNAME = 3;

export const passwordMatch = (confirmation, state) =>
  state.password === confirmation;

export const verificationLength = (field, length) => field.length >= length;
