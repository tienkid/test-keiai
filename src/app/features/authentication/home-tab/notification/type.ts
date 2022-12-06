export type ItemNotifyType = {
  id: number;
  text: string;
  date: string;
  content: string;
  check?: boolean;
};

export type RenderItemNotifyType = {
  item: ItemNotifyType;
  index: number;
};

export type ItemNotifyProps = {
  item: ItemNotifyType;
  handleToDetail: (data: ItemNotifyType) => void;
};
