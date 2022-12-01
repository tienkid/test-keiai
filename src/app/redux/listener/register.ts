/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { execFunc, handleErrorResponse, onCheckType } from '@common';
import { ENVConfig } from '@config/env';
import {
  CityType,
  ProvinceType,
} from '@features/un-authentication/information/type';
import { takeLatestListeners } from '@listener';
import { ApiConstants, NetWorkService } from '@networking';

import { appActions } from '../action-slice/app';
import { registerActions } from '../action-slice/register';

takeLatestListeners(true)({
  actionCreator: registerActions.validate,
  effect: async (action, listenerApi) => {
    const { body, onSucceeded } = action.payload;
    const response = await NetWorkService.Post<string>({
      url: ApiConstants.VALIDATE,
      body,
    });

    if (!response) {
      return;
    }
    if (handleErrorResponse(response)) {
      // TODO
      if (onCheckType(onSucceeded, 'function')) {
        onSucceeded();
      }
    }
    console.log(response, 'response');
  },
});

takeLatestListeners(true)({
  actionCreator: registerActions.register,
  effect: async (action, listenerApi) => {
    const { body, onSucceeded } = action.payload;
    const response = await NetWorkService.Post<any>({
      url: ApiConstants.REGISTER,
      body,
    });
    if (!response) {
      return;
    }
    if (handleErrorResponse(response)) {
      // TODO
      if (onCheckType(onSucceeded, 'function')) {
        onSucceeded();
      }
    }
    console.log(response, 'response');
  },
});
takeLatestListeners()({
  actionCreator: registerActions.getProvince,
  effect: async (action, _listenerApi) => {
    const { onSucceeded } = action.payload;
    const response = await NetWorkService.Get<ProvinceType[]>({
      url: `${ENVConfig.API_PROVINCE}`,
    });

    if (!response) {
      return;
    }
    if (handleErrorResponse(response)) {
      execFunc(onSucceeded, response.data);
    }
  },
});

takeLatestListeners()({
  actionCreator: registerActions.getCity,
  effect: async (action, listenerApi) => {
    const { body, onSucceeded } = action.payload;
    const response = await NetWorkService.Get<CityType[]>({
      url: `${ENVConfig.API_City}${body}`,
    });

    if (!response) {
      return;
    }
    if (handleErrorResponse(response)) {
      listenerApi.dispatch(appActions.setCityData(response.data));
      // execFunc(onSucceeded, response.data);
    }
  },
});

takeLatestListeners(true)({
  actionCreator: registerActions.confirm,
  effect: async (action, listenerApi) => {
    const { body, onSucceeded } = action.payload;
    const response = await NetWorkService.Post<any>({
      url: ApiConstants.CONFIRM,
      body,
    });
    if (!response) {
      return;
    }
    if (handleErrorResponse(response)) {
      // TODO
      if (onCheckType(onSucceeded, 'function')) {
        onSucceeded();
      }
    }
    console.log(response, 'response');
  },
});

takeLatestListeners(true)({
  actionCreator: registerActions.checkContract,
  effect: async (action, listenerApi) => {
    const { body, onSucceeded, onError } = action.payload;

    const response = await NetWorkService.Get<any>({
      url: ApiConstants.CHECK_CONTRACT + body,
    });
    if (!response) {
      console.log(11111);

      return;
    }
    if (handleErrorResponse(response)) {
      console.log(22222);
      // TODO
      if (onCheckType(onSucceeded, 'function')) {
        onSucceeded();
      }
    } else {
      console.log(333333);
      if (onCheckType(onError, 'function')) {
        onError();
      }
    }
  },
});
