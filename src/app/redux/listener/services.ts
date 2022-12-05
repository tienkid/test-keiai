import { execFunc, handleErrorResponse } from '@common';
import { ENVConfig } from '@config/env';
import { MenuService } from '@features/authentication/setting-tab/type';
import { takeLatestListeners } from '@listener';
import { ApiOnlyEndPoint, NetWorkService } from '@networking';

import { servicesActions } from '../action-slice/services';

takeLatestListeners(true)({
  actionCreator: servicesActions.getAllServices,
  effect: async (action, _listenerApi) => {
    const { onSucceeded } = action.payload;

    const response = await NetWorkService.Get<MenuService[]>({
      url: ENVConfig.API_URL_PRO + ApiOnlyEndPoint.SERVICES,
    });

    if (!response) {
      return;
    }
    if (handleErrorResponse(response)) {
      execFunc(onSucceeded, response.data);
    }
  },
});
