import { Meta } from './app';

export interface ItemBanner {
  id: string;
  title: string;
  image: string;
  thumbnail: string;
  openType: string;
  settingTitleUrl: string;
  settingUrl: string;
  settingContentId: string;
  bannerType: string;
  status: string;
  startedAt: Date;
  endedAt: Date;
  views: number;
  bannerPosition: string;
  createdBy: string;
  updatedBy: string;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface BannerResponse {
  items: ItemBanner[];
  meta: Meta;
}
export type ParamsBanner = {
  page: number;
  limit: number;
  keyword?: string;
  status?: 'public' | 'draft' | 'preview';
};
