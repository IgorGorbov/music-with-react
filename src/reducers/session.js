import { TOGGLE_LIKE_TRACK, SELECT_CATEGORY } from "../actionsTypes/index";

const initialState = {
  user: {
    email: "",
    password: ""
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
