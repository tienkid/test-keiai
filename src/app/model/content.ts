import { TagType } from '@config/type';

import { Meta } from './app';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type ParamsContent = {
  page: number;
  perPage: number;
  keyword?: string;
  status?: string;
  postType?: string;
};

export interface ContentResponse {
  items: Item[];
  meta?: Meta;
}

export interface Item {
  id: string;
  slug: string;
  title: string;
  content: string;
  view: number;
  settingTitleUrl: string;
  settingUrl: string;
  addContact: boolean;
  addTell: boolean;
  phoneNumber: string;
  serviceCardFromTitle: string;
  serviceCardContentId: string;
  postType: string;
  status: string;
  publicUrl: string;
  startTime?: string;
  endTime?: string;
  createdBy?: any;
  thumb?: any;
  createdAt: string;
  updatedAt: string;
  tags: TagType[];
  files: any[];
}
