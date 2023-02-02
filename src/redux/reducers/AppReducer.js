import * as types from '../actions/types';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_APP:
    default:
      return state;
  }
};
export default reducer;
