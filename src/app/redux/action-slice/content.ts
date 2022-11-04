import { ContentResponse, ParamsContent } from '@model/content';
import { GET_CONTENT } from '@redux-action-type/content';
import { createAction } from '@reduxjs/toolkit';

export const getContent = createAction(
  GET_CONTENT,
  (params?: ParamsContent, onSucceeded?: (data: ContentResponse) => void) => ({
    payload: {
      params,
      onSucceeded,
    },
  }),
);

export const contentAction = { getContent };
