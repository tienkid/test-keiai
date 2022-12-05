import { DataKeiaiType } from './contain';

export interface KeiaiItemPropsType {
  item: DataKeiaiType;
}

export interface DataService {
  id: number;
  text: string;
  sign: string;
}

export interface MenuService {
  id: number;
  refer_link: string;
  service_name: string;
}
export interface DataMenu {
  data: MenuService[];
}
