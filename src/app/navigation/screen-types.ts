import { ItemNotifyType } from '@features/authentication/home-tab/notification/type';

import { MODAL_SELECTED_COUNTRY_TYPE } from '../common/constant';

export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  WELCOME = 'WELCOME',
  INFORMATION_PROFILE = 'INFORMATION_PROFILE',
  HOME_STACK = 'HOME_STACK',
  AUTHORIZE = 'AUTHORIZE',
  HOME = 'HOME',
  OTP_SCREEN = 'OTP_SCREEN',
  MODAL_SELECTED_COUNTY = 'MODAL_SELECTED_COUNTY',
}

export enum BOTTOM_TAB {
  TAB_HOME = 'TAB_HOME',
  TAB_SETTING = 'TAB_SETTING',
  TAB_CONTENT = 'TAB_CONTENT',
  TAB_POINT = 'TAB_POINT',
}

export enum HOME_STACK {
  HOME = 'HOME',
  NOTIFY = 'NOTIFY',
  NOTIFY_DETAIL = 'NOTIFY_DETAIl',
}

export enum CONTENT_STACK {
  CONTENT = 'CONTENT',
  CONTENT_DETAIL = 'CONTENT_DETAIL',
}

export enum POINT_STACK {
  POINT = 'POINT',
}

export enum SETTING_STACK {
  SETTING = 'SETTING',
}

export type UnAuthorizeParamsList = {
  [APP_SCREEN.WELCOME]: undefined;
  [APP_SCREEN.INFORMATION_PROFILE]: undefined;
  [APP_SCREEN.MODAL_SELECTED_COUNTY]: { type: MODAL_SELECTED_COUNTRY_TYPE };
  [APP_SCREEN.LOGIN]: undefined;
  [APP_SCREEN.REGISTER]: undefined;
  [APP_SCREEN.SPLASH]: undefined;
  [APP_SCREEN.OTP_SCREEN]: undefined;
};
export type AuthorizeParamsList = {
  [APP_SCREEN.HOME]: undefined;
  [CONTENT_STACK.CONTENT]: undefined;
  [CONTENT_STACK.CONTENT_DETAIL]: undefined;
  [BOTTOM_TAB.TAB_HOME]: undefined;
  [HOME_STACK.NOTIFY]: undefined;
  [HOME_STACK.NOTIFY_DETAIL]: { item: ItemNotifyType };
};
export type RootStackParamList = {
  [APP_SCREEN.UN_AUTHORIZE]: undefined;
  [APP_SCREEN.AUTHORIZE]: undefined;
  [HOME_STACK.NOTIFY]: undefined;
} & UnAuthorizeParamsList &
  AuthorizeParamsList;
