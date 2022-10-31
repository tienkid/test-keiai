import { handleErrorResponse } from '@common';
import { takeLatestListeners } from '@listener';
import { ApiConstants, NetWorkService } from '@networking';

import { appActions } from '../action-slice/app';
import { pointAction } from '../action-slice/point';

takeLatestListeners()({
  actionCreator: pointAction.getPoint,
  effect: async (action, _listenerApi) => {
    // const { onSucceeded } = action.payload;
    const response = await NetWorkService.Get<any>({
      url: ApiConstants.GET_POINT,
    });

    if (!response) {
      return;
    }

    if (handleErrorResponse(response)) {
      _listenerApi.dispatch(appActions.setPoint(response.data));
    }
  },
});
