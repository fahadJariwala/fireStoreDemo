import {getUsersRequest} from './RandomUserAction';
import * as types from './types.js';

export const initApp = () => {
  return dispatch => {
    dispatch(getUsersRequest());
    dispatch({
      type: types.INIT_APP,
    });
  };
};
