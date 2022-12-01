import {
  CityType,
  ProvinceType,
} from '@features/un-authentication/information/type';
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
const getProvince = createAction(
  Action.GET_PROVINCE,
  (onSucceeded: (data: ProvinceType[]) => void) => ({
    payload: {
      onSucceeded,
    },
  }),
);

const getCity = createAction(
  Action.GET_CITY,
  (body?: string, onSucceeded?: (data: CityType[]) => void) => ({
    payload: {
      body,
      onSucceeded,
    },
  }),
);
const checkContract = createAction(
  Action.CHECK_CONTRACT,
  (body: string, onSucceeded?: () => void, onError?: () => void) => ({
    payload: {
      body,
      onSucceeded,
      onError,
    },
  }),
);
export const registerActions = {
  validate,
  register,
  confirm,
  checkContract,
  getProvince,
  getCity,
};
