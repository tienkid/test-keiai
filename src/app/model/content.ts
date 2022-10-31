/* eslint-disable @typescript-eslint/no-explicit-any */
export type ParamsContent = {
  page: number;
  perPage: number;
  keyword?: string;
  status?: string;
  postType?: string;
};

export interface ContentResponse {
  items: any[];
  meta: Meta;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: string;
  totalPages: number;
  currentPage: string;
}
