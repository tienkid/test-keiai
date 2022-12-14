import {
  FormGetCodeType,
  FormLoginType,
  FormSetCodeType,
} from '@model/authentication';
import * as Action from '@redux-action-type/login';
import { createAction } from '@reduxjs/toolkit';

const login = createAction(Action.LOGIN, (body: FormLoginType) => ({
  payload: {
    body,
  },
}));

const getCodeLogin = createAction(
  Action.GET_CODE_LOGIN,
  (body: FormGetCodeType, onSucceeded?: () => void) => ({
    payload: {
      body,
      onSucceeded,
    },
  }),
);

const OTPCodeLogin = createAction(
  Action.OTP_CODE_LOGIN,
  (body: FormSetCodeType, onSucceeded?: () => void) => ({
    payload: {
      body,
      onSucceeded,
    },
  }),
);

const logout = createAction(
  Action.LOGOUT,
  (body: { token_device?: string }) => ({
    payload: {
      body,
    },
  }),
);

export const loginActions = { login, logout, getCodeLogin, OTPCodeLogin };
