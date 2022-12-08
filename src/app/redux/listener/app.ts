import {
  checkKeyInObject,
  STORAGE_KEY_APP_THEME,
  STORAGE_KEY_PROFILE,
  STORAGE_KEY_REFRESH_TOKEN,
  STORAGE_KEY_TOKEN,
} from '@common';
import { takeLatestListeners } from '@listener';
import { MyAppTheme, ThemeType } from '@theme';
import { loadString } from '@utils/storage';

import { appActions } from '../action-slice/app';
import { registerActions } from '../action-slice/register';

takeLatestListeners()({
  actionCreator: appActions.startLoadApp,
  effect: async (_, listenerApi) => {
    const appTheme = loadString(STORAGE_KEY_APP_THEME);
    const token = loadString(STORAGE_KEY_TOKEN);
    const refreshToken = loadString(STORAGE_KEY_REFRESH_TOKEN);
    const userInfo = loadString(STORAGE_KEY_PROFILE);

    if (typeof token === 'string') {
      listenerApi.dispatch(
        appActions.setToken({ token, refreshToken: refreshToken as string }),
      );
    }

    if (typeof userInfo === 'string') {
      listenerApi.dispatch(appActions.setAppProfile(JSON.parse(userInfo)));
    }
    if (
      typeof appTheme === 'string' &&
      checkKeyInObject(MyAppTheme, appTheme)
    ) {
      listenerApi.dispatch(appActions.setAppTheme(appTheme as ThemeType));
    }
    listenerApi.dispatch(registerActions.getCityWrap());
    listenerApi.dispatch(appActions.endLoadApp());
  },
});
