import { MenuService } from '@features/authentication/setting-tab/type';
import { GET_SERVICES } from '@redux-action-type/services';
import { createAction } from '@reduxjs/toolkit';

export const getAllServices = createAction(
  GET_SERVICES,
  (onSucceeded?: (data: Array<MenuService>) => void) => ({
    payload: {
      onSucceeded,
    },
  }),
);
export const servicesActions = { getAllServices };
