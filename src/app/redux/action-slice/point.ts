import { HistoryPoint } from '@model/point';
import { GET_HIS_POINT, GET_POINT } from '@redux-action-type/point';
import { createAction } from '@reduxjs/toolkit';

export const getPoint = createAction(GET_POINT, () => ({
  payload: {},
}));

export const getHistoryPoint = createAction(
  GET_HIS_POINT,
  (id: string, onSucceeded: (data: Array<HistoryPoint>) => void) => ({
    payload: {
      id,
      onSucceeded,
    },
  }),
);
export const pointAction = { getPoint, getHistoryPoint };
