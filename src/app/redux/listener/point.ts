import { execFunc, handleErrorResponse } from '@common';
import { takeLatestListeners } from '@listener';
import { ApiConstants, NetWorkService } from '@networking';

import { appActions } from '../action-slice/app';
import { pointAction } from '../action-slice/point';

takeLatestListeners()({
  actionCreator: pointAction.getPoint,
  effect: async (action, _listenerApi) => {
    const { onSucceeded } = action.payload;
    const response = await NetWorkService.Get<{ data: { points: number } }>({
      url: ApiConstants.GET_POINT,
    });
    if (!response) {
      return;
    }
    if (handleErrorResponse(response)) {
      _listenerApi.dispatch(appActions.setPoint(response.data?.data.points));
      execFunc(onSucceeded, response.data?.data.points);
    }
  },
});

takeLatestListeners(true)({
  actionCreator: pointAction.getHistoryPoint,
  effect: async (action, _listenerApi) => {
    const { onSucceeded, id } = action.payload;

    const response = await NetWorkService.Get<any>({
      url: ApiConstants.GET_HISTORY_POINT + id + '/points',
    });

    if (!response) {
      return;
    }

    if (handleErrorResponse(response)) {
      execFunc(onSucceeded, response.data.data);
    }
  },
});
