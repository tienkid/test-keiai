import { ConfirmRequest, Register, ValidateRequest } from '@model/register';
import * as Action from '@redux-action-type/register';
import { createAction } from '@reduxjs/toolkit';

const validate = createAction(
  Action.VALIDATE,
  (body: ValidateRequest, onSucceeded?: () => void) => ({
    payload: {
      body,
      onSucceeded,
    },
  }),
);
const register = createAction(
  Action.REGISTER,
  (body: Register, onSucceeded: () => void) => ({
    payload: {
      body,
      onSucceeded,
    },
  }),
);
const confirm = createAction(
  Action.CONFIRM,
  (body: ConfirmRequest, onSucceeded?: () => void) => ({
    payload: {
      body,
      onSucceeded,
    },
  }),
);

export const registerActions = { validate, register, confirm };
