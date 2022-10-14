import { takeLatestListeners } from '@listener';
import { ContentResponse } from '@model/content';
import { ApiConstants, NetWorkService } from '@networking';

import { getContentAction } from '../action-slice/content';

takeLatestListeners()({
  actionCreator: getContentAction.getContent,
  effect: async (action, _listenerApi) => {
    const { params } = action.payload;
    const response = await NetWorkService.Get<ContentResponse>({
      url: ApiConstants.GET_CONTENT,
      params: { ...params },
    });

    if (!response) {
      return;
    }
    console.log(response, 'response');

    // if (handleErrorResponse(response)) {
    //   execFunc(onSucceeded, response.data.data, response.data.meta.total);
    // }
  },
});
