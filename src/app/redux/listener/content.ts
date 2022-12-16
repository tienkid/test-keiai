import { execFunc, handleErrorResponse } from '@common';
import { takeLatestListeners } from '@listener';
import { ContentResponse } from '@model/content';
import { ApiConstants, NetWorkService } from '@networking';

import { contentAction } from '../action-slice/content';

takeLatestListeners()({
  actionCreator: contentAction.getContent,
  effect: async (action, _listenerApi) => {
    const { params, onSucceeded } = action.payload;
    const response = await NetWorkService.Get<ContentResponse>({
      url: ApiConstants.GET_CONTENT,
      params: { ...params },
    });

    if (!response) {
      return;
    }
    if (handleErrorResponse(response)) {
      execFunc(onSucceeded, response.data);
    }
  },
});
