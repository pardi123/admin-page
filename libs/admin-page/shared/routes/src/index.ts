import { groupingBy } from '@admin-page/admin-page/shared/utils';
import { beranda, kapalManagement, RouteProps } from './routes';

const berandaRoutes = beranda.map((route) => ({
  ...route,
  groupBy: 'Beranda',
}));

const kapalManagementRoutes = kapalManagement.map((route) => ({
  ...route,
  groupBy: 'Kapal',
}));
export const routes: RouteProps[] = [
  ...berandaRoutes,
  ...kapalManagementRoutes,
];
export const groupingRoutes = groupingBy<RouteProps>(
  routes.filter((r) => r.isSidebar !== false),
  (route) => route.groupBy
);

export * from './routes';
