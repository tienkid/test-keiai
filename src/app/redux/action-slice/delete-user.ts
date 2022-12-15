import * as Action from '@redux-action-type/delete-user';
import { createAction } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/ban-types
const deleteUser = createAction(Action.DELETE_USER, (body?: {}) => ({
  payload: {
    body,
  },
}));

const validDeleteUser = createAction(
  Action.VALID_DELETE_USER,
  (
    body: { phone: string; password: string },
    onSucceeded?: () => void,
    onError?: () => void,
  ) => ({
    payload: {
      body,
      onSucceeded,
      onError,
    },
  }),
);

export const deleteUserActions = { deleteUser, validDeleteUser };
