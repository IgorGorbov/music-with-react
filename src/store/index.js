import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineForms } from "react-redux-form";
import thunk from "redux-thunk";

import reducers from "../reducers";

const initialUser = {
  email: "",
  password: ""
};

const store = createStore(
  reducers,
  combineForms({ user: initialUser }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
