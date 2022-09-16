export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  WELCOME = 'WELCOME',

  AUTHORIZE = 'AUTHORIZE',
  HOME = 'HOME',
}

export enum BOTTOM_TAB {
  TAB_HOME = 'TAB_HOME',
  TAB_SETTING = 'TAB_SETTING',
  TAB_CONTENT = 'TAB_CONTENT',
  TAB_POINT = 'TAB_POINT',
}

export enum HOME_STACK {
  HOME = 'HOME',
}

export enum CONTENT_STACK {
  CONTENT = 'CONTENT',
}

export enum POINT_STACK {
  POINT = 'POINT',
}

export enum SETTING_STACK {
  SETTING = 'SETTING',
}

export type UnAuthorizeParamsList = {
  [APP_SCREEN.WELCOME]: undefined;
  [APP_SCREEN.LOGIN]: undefined;
  [APP_SCREEN.REGISTER]: undefined;
  [APP_SCREEN.SPLASH]: undefined;
};
export type AuthorizeParamsList = {
  [APP_SCREEN.HOME]: undefined;
  [CONTENT_STACK.CONTENT]: undefined;
};
export type RootStackParamList = {
  [APP_SCREEN.UN_AUTHORIZE]: undefined;
  [APP_SCREEN.AUTHORIZE]: undefined;
} & UnAuthorizeParamsList &
  AuthorizeParamsList;
