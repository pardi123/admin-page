import { IconType } from 'react-icons';
import { FiHome } from 'react-icons/fi';
import { RiShip2Fill } from 'react-icons/ri';

export interface RouteProps {
  path: string;
  name: string;
  icon?: IconType;
  isSidebar?: boolean; /// whether link is display in sidebar or not
  groupBy?: string; // grouping link with a
  scope?: string; // to indicating that link in a same scope to set link as active
  // this
  isMain: boolean; // set true to identify that page is main or have not back button
  title?: string; // if this is set, the title in heading will forced set with this
  isShowSearchBar: boolean;
  isDetail: boolean;
}
export const beranda: RouteProps[] = [
  {
    path: 'beranda',
    name: 'Beranda',
    isMain: true,
    icon: FiHome,
    isShowSearchBar: false,
    isDetail: false,
  },
];

export const kapalManagement: RouteProps[] = [
  {
    path: 'kapal',
    name: 'Kapal',
    isMain: true,
    icon: RiShip2Fill,
    isShowSearchBar: true,
    isDetail: false,
  },
];
