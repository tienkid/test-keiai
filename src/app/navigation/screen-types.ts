import { ItemNotifyType } from '@features/authentication/home-tab/notification/type';
import {
  CityType,
  ProvinceType,
} from '@features/un-authentication/information/type';
import { Item } from '@model/content';

export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  ANIMATE = 'ANIMATE',
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  WELCOME = 'WELCOME',
  INFORMATION_PROFILE = 'INFORMATION_PROFILE',
  INFORMATION_PROFILE_STEP2 = 'INFORMATION_PROFILE_STEP2',
  HOME_STACK = 'HOME_STACK',
  AUTHORIZE = 'AUTHORIZE',
  HOME = 'HOME',
  OTP_SCREEN = 'OTP_SCREEN',
  MODAL_SELECTED_COUNTY = 'MODAL_SELECTED_COUNTY',
  CAROUSEL_3D = 'CAROUSEL_3D',
  HOME_ANIMATE = 'HOME_ANIMATE',
}

export enum BOTTOM_TAB {
  TAB_HOME = 'TAB_HOME',
  TAB_SETTING = 'TAB_SETTING',
  TAB_CONTENT = 'TAB_CONTENT',
  TAB_MY_HOME = 'TAB_MY_HOME',
  TAB_POINT = 'TAB_POINT',
}

export enum HOME_STACK {
  HOME = 'HOME',
  NOTIFY = 'NOTIFY',
  NOTIFY_DETAIL = 'NOTIFY_DETAIl',
  DELETE_USER = 'DELETE_USER',
  CONFIRM_DELETE = 'CONFIRM_DELETE',
  DELETE_SUCCESS = 'DELETE_SUCCESS',
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
  SERVICE_DETAIL = 'SERVICE_DETAIL',
}

export type UnAuthorizeParamsList = {
  [APP_SCREEN.WELCOME]: undefined;
  [APP_SCREEN.INFORMATION_PROFILE]: undefined;
  [APP_SCREEN.INFORMATION_PROFILE_STEP2]: undefined;
  [APP_SCREEN.MODAL_SELECTED_COUNTY]: {
    type: string;
    data: ProvinceType[] | CityType[];
    screenPrevious: string;
  };
  [APP_SCREEN.LOGIN]: undefined;
  [APP_SCREEN.REGISTER]: { type?: string; phone?: string };
  [APP_SCREEN.SPLASH]: undefined;
  [APP_SCREEN.OTP_SCREEN]: { type?: string };
  [APP_SCREEN.CAROUSEL_3D]: undefined;
  [APP_SCREEN.HOME_ANIMATE]: undefined;
};
export type AuthorizeParamsList = {
  [APP_SCREEN.HOME]: undefined;
  [CONTENT_STACK.CONTENT]: undefined;
  [CONTENT_STACK.CONTENT_DETAIL]: { item: Item };
  [SETTING_STACK.SERVICE_DETAIL]: { item: Item };
  [BOTTOM_TAB.TAB_HOME]: undefined;
  [BOTTOM_TAB.TAB_POINT]: undefined;
  [BOTTOM_TAB.TAB_SETTING]: undefined;
  [HOME_STACK.NOTIFY]: undefined;
  [POINT_STACK.POINT]: undefined;
  [HOME_STACK.NOTIFY_DETAIL]: { item: ItemNotifyType };
  [HOME_STACK.DELETE_USER]: undefined;
  [HOME_STACK.CONFIRM_DELETE]: undefined;
  [HOME_STACK.DELETE_SUCCESS]: undefined;
};

export type RootStackParamList = {
  [APP_SCREEN.UN_AUTHORIZE]: undefined;
  [APP_SCREEN.AUTHORIZE]: undefined;
  [HOME_STACK.NOTIFY]: undefined;
  [APP_SCREEN.ANIMATE]: undefined;
} & UnAuthorizeParamsList &
  AuthorizeParamsList;
