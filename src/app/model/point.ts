export type paramsGetPoint = {
  params?: Params;
  username: string;
};

type Params = {
  page?: number;
  count?: number;
  order?: string;
};
