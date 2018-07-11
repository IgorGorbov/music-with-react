import axios from 'axios';
import { SERVER_USERS_URL } from '../constants/ApiConstants';
import { FORM_LOGIN, FORM_REGISTER } from '../constants/Validate';

export const fetchData = async url => {
  return await axios.get(url).then(response => response.data);
};

export const postData = async (url, data) => {
  return await axios.post(url, data).then(response => response);
};

//  Maryam.Kuhlman@gmail.com
//  jS6wvEXfor6sZbz

async function asyncValidation(validationData, typeForm) {
  const { email, password } = validationData;
  const users = await fetchData(SERVER_USERS_URL).then(users => users);
  const currentUser = users.find(user => user.email === email);

  if (typeForm === FORM_LOGIN) {
    const isValidate = currentUser ? currentUser.password === password : false;
    const response = isValidate
      ? { user: currentUser, isValidate, error: '' }
      : { isValidate, error: 'Incorrect email or password' };
    return await response;
  }
  if (typeForm === FORM_REGISTER) {
    const isValidate = currentUser === undefined || currentUser === null;
    const newUser = {
      name: validationData.name,
      email: validationData.email,
      password: validationData.password,
    };
    const response = isValidate
      ? { user: newUser, isValidate, error: '' }
      : { isValidate, error: 'Email is invalid or already taken' };
    return await response;
  }
}

export default asyncValidation;
