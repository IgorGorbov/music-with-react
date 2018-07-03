export const isLoginForm = state =>
  state.routing.location.pathname === '/user/login' ||
  state.routing.location.pathname === '/user/login/';
