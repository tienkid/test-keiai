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
}

export const DATA_KEIAI: Array<Array<DataKeiaiType>> = [
  [
    { id: 1, image: 'iesapo', type: KeiaiType.IESAPO },
    { id: 2, image: 'denki', type: KeiaiType.DENKI },
  ],
  [
    { id: 3, image: 'internet', type: KeiaiType.INTERNET },
    { id: 4, image: 'support', type: KeiaiType.SUPPORT },
  ],
];
