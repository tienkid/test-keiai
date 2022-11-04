import { BannerResponse, ParamsBanner } from '@model/banner';
import { GET_BANNER } from '@redux-action-type/banner';
import { createAction } from '@reduxjs/toolkit';

export const getBanner = createAction(
  GET_BANNER,
  (params?: ParamsBanner, onSucceeded?: (data: BannerResponse) => void) => ({
    payload: {
      params,
      onSucceeded,
    },
  }),
);

export const bannerAction = { getBanner };
