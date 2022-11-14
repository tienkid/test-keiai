import { handleErrorResponse, NON_REFRESH } from '@common';
import { takeLatestListeners } from '@listener';
import { DataOTP, LoginResponse } from '@model/login';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { ApiConstants, NetWorkService } from '@networking';
import { remove } from '@utils/storage';

// eslint-disable-next-line import/order
import { appActions } from '../action-slice/app';

// import { appActions } from '../action-slice/app';
import { loginActions } from '../action-slice/login';

takeLatestListeners(true)({
  actionCreator: loginActions.login,
  effect: async (action, _listenerApi) => {
    const { body } = action.payload;
    const response = await NetWorkService.Post<LoginResponse>({
      url: ApiConstants.LOGIN,
      body,
    });
    if (!response) {
      return;
    }
  },
});

takeLatestListeners(true)({
  actionCreator: loginActions.getCodeLogin,
  effect: async (action, _listenerApi) => {
    const { body } = action.payload;
    const response = await NetWorkService.Post<LoginResponse>({
      url: ApiConstants.GET_CODE_LOGIN,
      body,
    });
    if (!response) {
      return;
    }
    console.log(response, 'response');

    if (handleErrorResponse(response)) {
      // TODO
      navigate(APP_SCREEN.OTP_SCREEN);
    }
  },
});

takeLatestListeners(true)({
  actionCreator: loginActions.OTPCodeLogin,
  effect: async (action, listenerApi) => {
    const { body } = action.payload;
    const response = await NetWorkService.Post<DataOTP>({
      url: ApiConstants.SET_CODE_LOGIN,
      body,
    });
    if (!response) {
      return;
    }

    if (handleErrorResponse(response)) {
      // TODO
      // navigate(APP_SCREEN.OTP_SCREEN);
      remove(NON_REFRESH);
      listenerApi.dispatch(
        appActions.setToken({
          token: response.data.token,
          refreshToken: response.data.refresh_token,
        }),
      );
    }
  },
});
