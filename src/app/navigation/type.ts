import { IconTypes } from '@assets/icon';

export type ItemDrawer = {
  id: number;
  content: string;
  url: string;
  icon: IconTypes;
};

export type ListRenderDrawer = {
  item: ItemDrawer;
};
