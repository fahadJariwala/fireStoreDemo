import * as types from '../actions/types';
const initialState = {
  users: [],
  loader: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RANDOM_USERS_REQUEST:
      return {...state, loader: true};
    case types.GET_RANDOM_USERS_SUCCESS:
      return {...state, ...(action.payload || {}), loader: false};
    case types.GET_RANDOM_USERS_FAIL:
      return {...state, loader: false};
    default:
      return state;
  }
};

export default reducer;
