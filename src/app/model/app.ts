/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CityType,
  PostalCodeChoice,
  ProvinceType,
} from '@features/un-authentication/information/type';
import { ThemeType } from '@theme';

import { ContentResponse } from './content';
import { FormInformationProfileType } from './information';
export interface AppState {
  internetState: boolean;

  profile: any;

  profileWrap: any;

  token: string | undefined;
  refreshToken: string | undefined;

  loadingApp: boolean;

  showDialog: boolean;

  theme: ThemeType;

  registerData: FormInformationProfileType | undefined;

  point: number;

  sessionID: string | undefined;

  contents: ContentResponse;

  provinceChoice: ProvinceType | CityType;

  dataProvince: ProvinceType[];

  dataCity: CityType[];

  dataWrapCity: CityType[];

  dataCityChoice: CityType;

  zipCode: PostalCodeChoice | undefined;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
