import {
  STORAGE_KEY_PROFILE,
  STORAGE_KEY_REFRESH_TOKEN,
  STORAGE_KEY_TOKEN,
} from '@common';
import { SLICE_NAME } from '@config/type';
import { AppState } from '@model/app';
import { ContentResponse } from '@model/content';
import { FormInformationProfileType } from '@model/information';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from '@theme';
import { remove, save, saveString } from '@utils/storage';

const initialAppState: AppState = {
  internetState: true,
  profile: {} as AppState['profile'],
  token: undefined,
  refreshToken: undefined,
  registerData: undefined,
  /**
   * default true to load app
   */
  loadingApp: false,
  showDialog: false,
  theme: 'default',
  point: 0,
  contents: { items: [] },
};
const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialAppState,
  reducers: {
    setInternetState: (state, { payload }: PayloadAction<boolean>) => {
      state.internetState = payload;
    },
    setToken: (
      state,
      { payload }: PayloadAction<{ token: string; refreshToken: string }>,
    ) => {
      // console.log({ payload });
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      saveString(STORAGE_KEY_TOKEN, payload.token);
      saveString(STORAGE_KEY_REFRESH_TOKEN, payload.refreshToken);
    },
    setRegisterData: (
      state,
      { payload }: PayloadAction<FormInformationProfileType | undefined>,
    ) => {
      state.registerData = payload;
    },
    setAppProfile: (state, { payload }: PayloadAction<unknown>) => {
      state.profile = payload;
      save(STORAGE_KEY_PROFILE, payload);
    },
    setPoint: (state, { payload }: PayloadAction<number>) => {
      state.point = payload;
    },
    setContents: (state, { payload }: PayloadAction<ContentResponse>) => {
      state.contents = payload;
    },
    setAppTheme: (state, { payload }: PayloadAction<ThemeType>) => {
      state.theme = payload;
    },
    startLoadApp: state => {
      state.loadingApp = true;
    },
    endLoadApp: state => {
      state.loadingApp = false;
    },
    startProcess: state => {
      state.showDialog = true;
    },
    endProcess: state => {
      state.showDialog = false;
    },
    logout: state => {
      state.token = undefined;
      state.profile = {};
      remove(STORAGE_KEY_TOKEN);
    },
  },
});
export const { reducer: appReducer, actions: appActions } = appSlice;
