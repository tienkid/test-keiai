import { handleErrorResponse } from '@common';
import { takeLatestListeners } from '@listener';
import { LoginResponse } from '@model/login';
import { ApiConstants, NetWorkService } from '@networking';

import { appActions } from '../action-slice/app';
import { loginActions } from '../action-slice/login';

takeLatestListeners(true)({
  actionCreator: loginActions.login,
  effect: async (action, listenerApi) => {
    const { body } = action.payload;
    const response = await NetWorkService.Post<LoginResponse>({
      url: ApiConstants.LOGIN,
      body,
    });
    if (!response) {
      return;
    }
    if (handleErrorResponse(response)) {
      // TODO
      listenerApi.dispatch(appActions.setToken(response.data?.accessToken));
    }
    console.log(response, 'response');
  },
});
