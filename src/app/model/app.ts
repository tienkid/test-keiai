/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeType } from '@theme';

import { FormInformationProfileType } from './information';
export interface AppState {
  internetState: boolean;

  profile: any;

  token: string | undefined;
  refreshToken: string | undefined;

  loadingApp: boolean;

  showDialog: boolean;

  theme: ThemeType;

  registerData: FormInformationProfileType | undefined;

  point: number;
}
