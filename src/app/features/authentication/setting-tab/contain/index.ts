import { ImageTypes } from '@assets/image';

export enum KeiaiType {
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
  link: string;
}

export const DATA_KEIAI: Array<DataKeiaiType> = [
  {
    id: 1,
    // image: 'iesapo',
    image: 'service_1',
    type: KeiaiType.IESAPO,
    title: 'KEIAI 家サポ',
    link: 'https://www.iesapo.ki-group.jp/',
  },
  {
    id: 2,
    image: 'internet',
    type: KeiaiType.INTERNET,
    title: 'KEIAI インターネット',
    link: 'https://owners.ki-group.jp/app/assets/pdf/keiai-internet2.pdf',
  },
  {
    id: 3,
    image: 'service_3',
    // image: 'banner_3',
    type: KeiaiType.DENKI,
    title: 'KEIAI 安心サポート',
    link: 'https://ki-group.co.jp/owners/anshin_support/',
  },
];
