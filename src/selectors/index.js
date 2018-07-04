export const getTypeForm = state => {
  return state.routing.location.pathname === '/user/login' ||
    state.routing.location.pathname === '/user/login/'
    ? 'Login'
    : 'Registration';
};

export const getPathForRedirect = state => {
  return state.routing.location.state
    ? state.routing.location.state.from.pathname
    : '/';
};
