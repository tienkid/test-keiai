import { ImageTypes } from '@assets/image';

enum KeiaiType {
  'IESAPO' = 'IESAPO',
  'DENKI' = 'DENKI',
  'INTERNET' = 'INTERNET',
  'SUPPORT' = 'SUPPORT',
}

export interface DataKeiaiType {
  id: number;
  image: ImageTypes;
  type: KeiaiType;
  title: string;
}

export const DATA_KEIAI: Array<Array<DataKeiaiType>> = [
  [
    { id: 1, image: 'iesapo', type: KeiaiType.IESAPO, title: 'KEIAI 家サポ' },
    {
      id: 2,
      image: 'banner_3',
      type: KeiaiType.DENKI,
      title: 'KEIAI インターネット',
    },
  ],
  [
    {
      id: 3,
      image: 'internet',
      type: KeiaiType.INTERNET,
      title: 'KEIAI 安心サポート',
    },
  ],
];
