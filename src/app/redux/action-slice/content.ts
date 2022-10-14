import { ParamsContent } from '@model/content';
import { GET_CONTENT } from '@redux-action-type/content';
import { createAction } from '@reduxjs/toolkit';

export const getContent = createAction(
  GET_CONTENT,
  (params: ParamsContent) => ({
    payload: {
      params,
    },
  }),
);

export const getContentAction = { getContent };
