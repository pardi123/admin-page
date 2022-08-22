import { AdminPageHome } from '@admin-page/admin-page/home';
import { Sidebar } from '@admin-page/admin-page/shared/layout';
import { RouteProps } from '@admin-page/admin-page/shared/routes';

export interface RouteNameProps extends Pick<RouteProps, 'path'> {
  component: JSX.Element;
}
export const routeNames: RouteNameProps[] = [
  {
    path: 'beranda',
    component: <AdminPageHome />,
  },
  {
    path: 'kapal',
    component: <Sidebar />,
  },
];
