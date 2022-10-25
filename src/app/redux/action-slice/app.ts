import { STORAGE_KEY_TOKEN } from '@common';
import { SLICE_NAME } from '@config/type';
import { AppState } from '@model/app';
import { FormInformationProfileType } from '@model/information';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from '@theme';
import { remove, saveString } from '@utils/storage';

const initialAppState: AppState = {
  internetState: true,
  profile: {},
  token: undefined,
  registerData: undefined,
  /**
   * default true to load app
   */
  loadingApp: false,
  showDialog: false,
  theme: 'default',
};
const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialAppState,
  reducers: {
    setInternetState: (state, { payload }: PayloadAction<boolean>) => {
      state.internetState = payload;
    },
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
      saveString(STORAGE_KEY_TOKEN, payload);
    },
    setRegisterData: (
      state,
      { payload }: PayloadAction<FormInformationProfileType | undefined>,
    ) => {
      state.registerData = payload;
    },
    setAppProfile: (state, { payload }: PayloadAction<unknown>) => {
      state.profile = payload;
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
