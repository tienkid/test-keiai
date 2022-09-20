export type ItemNotifyType = {
  id: number;
  text: string;
  date: string;
  content: string;
};

export type RenderItemNotifyType = {
  item: ItemNotifyType;
  index: number;
};

export type ItemNotifyProps = {
  item: ItemNotifyType;
};
