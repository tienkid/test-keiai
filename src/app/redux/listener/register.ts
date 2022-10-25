/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { handleErrorResponse, onCheckType } from '@common';
import { takeLatestListeners } from '@listener';
import { ApiConstants, NetWorkService } from '@networking';

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
