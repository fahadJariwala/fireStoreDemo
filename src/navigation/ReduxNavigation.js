import * as React from 'react';

export const navigationRef = React.createRef();
export const isReadyRef = React.createRef();

export const navigate = (name, params) =>
  isReadyRef.current &&
  navigationRef.current &&
  navigationRef.current.navigate(name, params);

export const dispatch = (params) =>
  isReadyRef.current &&
  navigationRef.current &&
  navigationRef.current.dispatch(params);

export const getRootState = () =>
  isReadyRef.current &&
  navigationRef.current &&
  navigationRef.current.getRootState();
