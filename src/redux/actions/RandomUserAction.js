import * as types from './types';

export const getUsersRequest = () => ({
  type: types.GET_RANDOM_USERS_REQUEST,
});

export const getUsersSuccess = users => ({
  type: types.GET_RANDOM_USERS_SUCCESS,
  payload: {users},
});

export const getUsersFail = () => ({
  type: types.GET_RANDOM_USERS_FAIL,
});
