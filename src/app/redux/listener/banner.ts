import { execFunc, handleErrorResponse } from '@common';
import { takeLatestListeners } from '@listener';
import { BannerResponse } from '@model/banner';
import { ApiConstants, NetWorkService } from '@networking';

import { bannerAction } from '../action-slice/banner';

takeLatestListeners()({
  actionCreator: bannerAction.getBanner,
  effect: async (action, _listenerApi) => {
    const { params, onSucceeded } = action.payload;
    const response = await NetWorkService.Get<BannerResponse>({
      url: ApiConstants.GET_BANNER,
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
