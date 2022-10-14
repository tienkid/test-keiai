import { FormLoginType } from '@model/authentication';
import * as Action from '@redux-action-type/login';
import { createAction } from '@reduxjs/toolkit';

const login = createAction(Action.LOGIN, (body: FormLoginType) => ({
  payload: {
    body,
  },
}));

const logout = createAction(
  Action.LOGOUT,
  (body: { token_device?: string }) => ({
    payload: {
      body,
    },
  }),
);

export const loginActions = { login, logout };
