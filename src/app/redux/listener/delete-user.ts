import { execFunc, handleErrorResponse } from '@common';
import { takeLatestListeners } from '@listener';
import { LoginResponse } from '@model/login';
import { navigate } from '@navigation/navigation-service';
import { HOME_STACK } from '@navigation/screen-types';
import { ApiConstants, NetWorkService } from '@networking';

import { deleteUserActions } from '../action-slice/delete-user';

takeLatestListeners(true)({
  actionCreator: deleteUserActions.deleteUser,
  effect: async (action, _listenerApi) => {
    const { body } = action.payload;
    const response = await NetWorkService.PATCH<LoginResponse>({
      url: ApiConstants.DELETE_USER_SUCCESS,
      body,
    });
    if (!response) {
      return;
    }
    if (handleErrorResponse(response)) {
      navigate(HOME_STACK.DELETE_SUCCESS);
    }
  },
});
takeLatestListeners(true)({
  actionCreator: deleteUserActions.validDeleteUser,
  effect: async (action, _listenerApi) => {
    const { body, onSucceeded } = action.payload;
    const response = await NetWorkService.Post<any>({
      url: ApiConstants.VALID_DELETE_USER_SUCCESS,
      body,
    });
    if (!response) {
      return;
    }
    console.log(response, 'response');

    if (handleErrorResponse(response)) {
      execFunc(onSucceeded);
      // navigate(HOME_STACK.CONFIRM_DELETE);
    }
  },
});
