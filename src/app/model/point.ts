export type paramsGetPoint = {
  params?: Params;
  username: string;
};

type Params = {
  page?: number;
  count?: number;
  order?: string;
};

export interface HistoryPoint {
  adjustment: number;
  newBalance: number;
  memo: string;
  type: 'usage' | 'issue';
  issuedAt: string;
}
