import { GET_POINT } from '@redux-action-type/point';
import { createAction } from '@reduxjs/toolkit';

export const getPoint = createAction(GET_POINT, () => ({
  payload: {},
}));

export const pointAction = { getPoint };
